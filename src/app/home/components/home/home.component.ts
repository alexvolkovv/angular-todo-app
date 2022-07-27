import { Component, OnDestroy, OnInit } from '@angular/core'
import { ListStore } from '../../../store/list.store'
import { TaskStore } from '../../../store/task.store'
import { ListType } from '../../../types/list.type'
import { TaskType } from '../../../types/task.type'
import { Subscription } from 'rxjs'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  lists: ListType[] = []
  tasks: TaskType[] = []

  subLists?: Subscription
  subTasks?: Subscription

  constructor(public listStore: ListStore, public taskStore: TaskStore) {}

  ngOnInit() {
    this.subTasks = this.taskStore.tasks$.subscribe((tasks) => {
      this.tasks = this.taskStore.tasks$.getValue()
    })

    this.subLists = this.listStore.list$.subscribe((lists) => {
      this.lists = this.listStore.list$.getValue()
    })
  }

  ngOnDestroy() {
    this.subLists?.unsubscribe()
    this.subTasks?.unsubscribe()
  }
}
