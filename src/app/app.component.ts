import { Component, OnInit } from '@angular/core'
import { TasksService } from './services/tasks.service'
import { ListService } from './services/list.service'
import { TaskStore } from './store/task.store'
import { ListStore } from './store/list.store'
import { ColorStore } from './store/color.store'
import { ColorService } from './services/color.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private tasksService: TasksService,
    private listsService: ListService,
    private taskStore: TaskStore,
    private listStore: ListStore,
    private colorStore: ColorStore,
    private colorService: ColorService
  ) {}

  ngOnInit() {
    this.listsService.getLists().subscribe((lists) => {
      this.listStore.list$.next(lists)
    })

    this.tasksService.getTasks().subscribe((tasks) => {
      this.taskStore.tasks$.next(tasks)
    })

    this.colorService.getColors().subscribe((colors) => {
      this.colorStore.colors$.next(colors)
    })
  }
}
