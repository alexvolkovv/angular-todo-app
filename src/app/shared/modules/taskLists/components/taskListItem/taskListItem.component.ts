import { Component, Input, OnInit } from '@angular/core'
import { ListType } from '../../../../../types/list.type'
import { ListService } from '../../../../../services/list.service'
import { ListStore } from '../../../../../store/list.store'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'list-item',
  templateUrl: 'taskListItem.component.html',
  styleUrls: ['taskListItem.component.scss'],
})
export class TaskListItemComponent {
  @Input('isRound') isRound!: boolean
  @Input('content') content!: string
  @Input('badgeColor') badgeColor?: string
  @Input() removable: boolean = true
  @Input() listItem?: ListType

  constructor(private listService: ListService, private listStore: ListStore) {}

  removeList(event: Event) {
    event.stopPropagation()
    this.listService.removeList(this.listItem?.id || 0).subscribe((data) => {
      this.listStore.removeList(this.listItem?.id || 0)
    })
  }
}
