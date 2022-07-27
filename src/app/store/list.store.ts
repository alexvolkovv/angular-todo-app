import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ListType } from '../types/list.type'

@Injectable({
  providedIn: 'root',
})
export class ListStore {
  list$: BehaviorSubject<ListType[]> = new BehaviorSubject<ListType[]>([])

  constructor() {}

  addList(list: ListType) {
    this.list$.next([...this.list$.getValue(), list])
  }

  removeList(id: number) {
    const newLists = this.list$.getValue().filter((list) => list.id !== +id)

    this.list$.next(newLists)
  }
}
