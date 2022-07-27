import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'
import { ColorType } from '../types/color.type'

@Injectable()
export class ColorService {
  apiUrl = environment.api + '/colors'

  constructor(private http: HttpClient) {}

  getColors(): Observable<ColorType[]> {
    return this.http.get<ColorType[]>(this.apiUrl)
  }
}
