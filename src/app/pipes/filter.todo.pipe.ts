import { Pipe, PipeTransform } from '@angular/core'
import { TaskType } from '../types/task.type'
import { ListType } from '../types/list.type'

@Pipe({
  name: 'filterTodo',
})
export class FilterTodoPipe implements PipeTransform {
  transform(tasks: TaskType[], list: ListType): any {
    return tasks.filter((task) => task.list_id === list.id)
  }
}
