import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ColorType } from '../types/color.type'

@Injectable({
  providedIn: 'root',
})
export class ColorStore {
  colors$: BehaviorSubject<ColorType[]> = new BehaviorSubject<ColorType[]>([])
}
