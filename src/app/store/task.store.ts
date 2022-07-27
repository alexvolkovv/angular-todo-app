import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { TaskType } from '../types/task.type'

@Injectable({
  providedIn: 'root',
})
export class TaskStore {
  tasks$: BehaviorSubject<TaskType[]> = new BehaviorSubject<TaskType[]>([])

  constructor() {}

  addTask(newTask: TaskType) {
    this.tasks$.next([...this.tasks$.getValue(), newTask])
  }

  removeTask(taskId: number) {
    const newTasks = this.tasks$.getValue().filter((task) => task.id !== taskId)

    this.tasks$.next(newTasks)
  }

  updateTask(taskId: number, newTask: TaskType) {
    const newTasks = this.tasks$.getValue().map((task) => {
      if (task.id === taskId) {
        return newTask
      }

      return task
    })

    this.tasks$.next(newTasks)
  }
}
