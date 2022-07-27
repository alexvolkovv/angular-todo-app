import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './components/home/home.component'
import { RouterModule, Routes } from '@angular/router'
import { TodosModule } from '../shared/modules/todos/todos.module'
import { FilterTodoPipe } from '../pipes/filter.todo.pipe'
import { TodoItemComponent } from '../shared/modules/todos/components/todoItem/todoItem.component'
import { TodoModalAddComponent } from '../shared/modules/todos/components/todoModalAdd/todoModalAdd.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TodosModule],
  declarations: [HomeComponent, FilterTodoPipe],
})
export class HomeModule {}
