import { Component, OnInit } from '@angular/core'
import { ListType } from '../../../../../types/list.type'
import { HttpClient } from '@angular/common/http'
import { ListService } from '../../../../../services/list.service'
import { Subscription } from 'rxjs'
import { ListStore } from '../../../../../store/list.store'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'task-lists',
  templateUrl: 'taskLists.component.html',
  styleUrls: ['taskLists.component.scss'],
})
export class TaskListsComponent implements OnInit {
  list: ListType[] = []
  listSub?: Subscription
  modalVisible: boolean = false

  constructor(public listStore: ListStore) {}

  ngOnInit() {
    this.listSub = this.listStore.list$.subscribe((data) => {
      this.list = data
    })
  }

  toggleModal() {
    this.modalVisible = !this.modalVisible
  }

  setVisible(status: boolean) {
    this.modalVisible = status
  }
}
