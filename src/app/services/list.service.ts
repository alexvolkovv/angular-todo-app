import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ListType } from '../types/list.type'
import { environment } from '../../environments/environment'
import { map, Observable } from 'rxjs'

@Injectable()
export class ListService {
  apiLink: string = environment.api + '/lists'
  constructor(private http: HttpClient) {}

  getLists(): Observable<ListType[]> {
    return this.http.get<ListType[]>(this.apiLink)
  }

  addList(list: ListType) {
    return this.http.post<ListType>(this.apiLink, list)
  }

  removeList(id: number) {
    return this.http.delete(this.apiLink + '/' + id)
  }
}
