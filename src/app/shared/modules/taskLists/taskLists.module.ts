import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskListsComponent } from './components/taskLists/taskLists.component'
import { TaskListItemComponent } from './components/taskListItem/taskListItem.component'
import { ListService } from '../../../services/list.service'
import { RouterModule } from '@angular/router'
import { ModalAddListModule } from '../modalAddList/modalAddList.module'

@NgModule({
  imports: [CommonModule, RouterModule, ModalAddListModule],
  declarations: [TaskListsComponent, TaskListItemComponent],
  exports: [TaskListsComponent],
  providers: [ListService],
})
export class TaskListsModule {}
