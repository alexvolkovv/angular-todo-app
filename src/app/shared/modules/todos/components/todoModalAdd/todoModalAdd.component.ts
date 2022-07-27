import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'todo-modal-add',
  templateUrl: 'todoModalAdd.component.html',
  styleUrls: ['todoModalAdd.component.scss'],
})
export class TodoModalAddComponent implements AfterViewInit {
  @Output('visible') visible: EventEmitter<boolean> =
    new EventEmitter<boolean>()
  @Output('newTaskName') newTaskName: EventEmitter<string> =
    new EventEmitter<string>()
  @ViewChild('input') input: ElementRef | undefined
  @ViewChild('root') root: ElementRef | undefined
  @Input('showModalButton') showModalButton: HTMLButtonElement | undefined

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    const clickInside: boolean = this.root?.nativeElement.contains(event.target)
    const isClickedShowModalBtn = event.target == this.showModalButton

    if (clickInside || isClickedShowModalBtn) {
      console.log('inside')
      return
    } else {
      console.log('outside')
      this.visible.emit(false)
    }
  }

  form: FormGroup = new FormGroup({
    taskName: new FormControl(''),
  })

  constructor() {}

  addTask() {
    this.newTaskName.emit(this.form.value.taskName)
    this.form.reset()
    this.input?.nativeElement.focus()
  }

  ngAfterViewInit() {
    this.input?.nativeElement.focus()
    // document.addEventListener('click', this.clickOut.bind(this))
  }
}
