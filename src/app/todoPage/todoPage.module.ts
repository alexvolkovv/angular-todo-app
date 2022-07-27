import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { TodoPageComponent } from './components/todoPage/todoPage.component'
import { TodosModule } from '../shared/modules/todos/todos.module'
import { TasksService } from '../services/tasks.service'
import { TodoItemComponent } from '../shared/modules/todos/components/todoItem/todoItem.component'
import { TodoModalAddComponent } from '../shared/modules/todos/components/todoModalAdd/todoModalAdd.component'

const routes: Routes = [
  {
    path: ':id',
    component: TodoPageComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TodosModule],
  declarations: [TodoPageComponent],
  providers: [TasksService],
})
export class TodoPageModule {}
