import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModalAddListComponent } from './components/modalAddList/modalAddList.component'
import { ColorService } from '../../../services/color.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListService } from '../../../services/list.service'

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ModalAddListComponent],
  declarations: [ModalAddListComponent],
  providers: [ColorService, ListService],
})
export class ModalAddListModule {}
