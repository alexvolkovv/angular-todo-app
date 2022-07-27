import { Component, OnDestroy, OnInit } from '@angular/core'
import { TaskType } from '../../../types/task.type'
import { ActivatedRoute, Router } from '@angular/router'
import { map, Subscription } from 'rxjs'
import { ListType } from '../../../types/list.type'
import { TaskStore } from '../../../store/task.store'
import { ListStore } from '../../../store/list.store'

@Component({
  selector: 'todo-page',
  templateUrl: 'todoPage.component.html',
  styleUrls: ['todoPage.component.scss'],
})
export class TodoPageComponent implements OnDestroy, OnInit {
  tasks: TaskType[] = []
  listId: number = 0
  currentList?: ListType

  listsSub: Subscription = new Subscription()

  constructor(
    private route: ActivatedRoute,
    private tasksStore: TaskStore,
    private listStore: ListStore,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.listId = +params['id']

      this.tasks = this.tasksStore.tasks$
        .getValue()
        .filter((task) => task.list_id === +params['id'])

      const currentList = this.listStore.list$
        .getValue()
        .find((list) => list.id === this.listId)

      this.setCurrentList(currentList)
    })

    this.tasksStore.tasks$.subscribe((tasks) => {
      this.tasks = tasks.filter((task) => task.list_id === this.listId)
    })

    this.listsSub = this.listStore.list$.subscribe((lists) => {
      const currentList = lists.find((list) => list.id === this.listId)

      this.setCurrentList(currentList)
    })
  }

  setCurrentList(list: ListType | undefined) {
    if (list) {
      this.currentList = list
    } else {
      this.currentList = undefined
      this.router.navigate(['/'])
    }
  }

  ngOnDestroy() {
    this.listsSub.unsubscribe()
  }
}
