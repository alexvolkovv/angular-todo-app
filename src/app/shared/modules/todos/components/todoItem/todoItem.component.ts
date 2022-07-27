import { Component, Input } from '@angular/core'
import { TaskType } from '../../../../../types/task.type'
import { TasksService } from '../../../../../services/tasks.service'
import { TaskStore } from '../../../../../store/task.store'

@Component({
  selector: 'todo-item',
  templateUrl: 'todoItem.component.html',
  styleUrls: ['todoItem.component.scss'],
})
export class TodoItemComponent {
  @Input() task!: TaskType

  constructor(
    private taskService: TasksService,
    private taskStore: TaskStore
  ) {}

  deleteTask() {
    this.taskService.removeTask(this.task.id || 0).subscribe((data) => {
      this.taskStore.removeTask(this.task.id || 0)
    })
  }

  updateTask() {
    this.task.completed = !this.task.completed
    this.taskService.updateTask(this.task).subscribe()
  }

  changeName() {
    const newName = prompt('Новое имя:', this.task.name)

    if (newName) {
      this.task.name = newName
      this.taskService.updateTask(this.task).subscribe()
    }
  }
}
