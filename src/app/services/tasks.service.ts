import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TaskType } from '../types/task.type'
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable()
export class TasksService {
  apiUrl: string = environment.api + '/tasks'
  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(this.apiUrl)
  }

  addTask(newTask: TaskType): Observable<TaskType> {
    return this.http.post<TaskType>(this.apiUrl, newTask)
  }

  removeTask(taskId: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + taskId)
  }

  updateTask(task: TaskType): Observable<TaskType> {
    return this.http.patch<TaskType>(`${this.apiUrl}/${task.id}`, task)
  }
}
