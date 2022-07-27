import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TasksService } from '../../../../../services/tasks.service'
import { TaskType } from '../../../../../types/task.type'
import { ListType } from '../../../../../types/list.type'
import { ListStore } from '../../../../../store/list.store'
import { TaskStore } from '../../../../../store/task.store'

@Component({
  selector: 'todo',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() listId!: number
  @Input() tasks!: TaskType[]
  @Input() list?: ListType

  modalVisible: boolean = false
  showModalBtn: HTMLButtonElement | undefined

  @ViewChild('showModal') showModalRef:
    | ElementRef<HTMLButtonElement>
    | undefined
    | null

  constructor(
    private listStore: ListStore,
    private taskStore: TaskStore,
    private taskService: TasksService
  ) {}

  ngOnInit() {}

  toggleModal() {
    this.modalVisible = !this.modalVisible
    if (this.showModalRef?.nativeElement) {
      this.showModalBtn = this.showModalRef?.nativeElement
    }
  }

  setVisible(status: boolean) {
    this.modalVisible = status
  }

  addTask(taskName: string) {
    const newTask: TaskType = {
      name: taskName,
      list_id: this.list?.id || 0,
    }

    this.taskService.addTask(newTask).subscribe((newTask) => {
      this.taskStore.addTask(newTask)
    })
  }
}
