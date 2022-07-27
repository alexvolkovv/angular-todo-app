import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodosComponent } from './components/todos/todos.component'
import { TodoItemComponent } from './components/todoItem/todoItem.component'
import { TodoModalAddComponent } from './components/todoModalAdd/todoModalAdd.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [TodosComponent, TodoItemComponent, TodoModalAddComponent],
  exports: [TodosComponent],
})
export class TodosModule {}
