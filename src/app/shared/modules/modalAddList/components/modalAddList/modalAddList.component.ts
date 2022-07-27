import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { ColorStore } from '../../../../../store/color.store'
import { ColorType } from '../../../../../types/color.type'
import { FormControl, FormGroup } from '@angular/forms'
import { Subscription } from 'rxjs'
import { ListService } from '../../../../../services/list.service'
import { ListType } from '../../../../../types/list.type'
import { ListStore } from '../../../../../store/list.store'

@Component({
  selector: 'modal-add-list',
  templateUrl: 'modalAddList.component.html',
  styleUrls: ['modalAddList.component.scss'],
})
export class ModalAddListComponent implements OnInit, OnDestroy, AfterViewInit {
  colors: ColorType[] = []
  selectedColor: number = 0
  @Output('visible') visible: EventEmitter<boolean> =
    new EventEmitter<boolean>()

  @ViewChild('modal') modalRef: ElementRef | undefined
  @ViewChild('input') input: ElementRef | undefined

  @Input('showModalButton') showModalButton: HTMLButtonElement | undefined

  clickOutsideFunction?: (event: Event) => void

  form: FormGroup = new FormGroup({
    listName: new FormControl(''),
  })
  private colorsSub?: Subscription

  constructor(
    private colorStore: ColorStore,
    private listService: ListService,
    private listStore: ListStore
  ) {}

  ngOnInit() {
    this.colorsSub = this.colorStore.colors$.subscribe((colors) => {
      this.colors = colors
    })
    this.clickOutsideFunction = this.clickOutside.bind(this)
    window.document.addEventListener('click', this.clickOutsideFunction)
  }

  ngOnDestroy(): void {
    if (this.clickOutsideFunction) {
      window.document.removeEventListener('click', this.clickOutsideFunction)
    }

    if (this.colorsSub) {
      this.colorsSub.unsubscribe()
    }
  }

  ngAfterViewInit() {
    this.input?.nativeElement.focus()
  }

  clickOutside(event: Event): void {
    const isAddButton = event.target === this.showModalButton
    const clickOnModal = event
      .composedPath()
      .includes(this.modalRef?.nativeElement)
    console.log(isAddButton)

    if (clickOnModal || isAddButton) {
      return
    }

    this.visible.emit(false)
  }

  addList() {
    const newList: ListType = {
      name: this.form.value.listName,
      colorId: this.colors[this.selectedColor].id,
    }
    this.listService.addList(newList).subscribe((list) => {
      this.listStore.addList(list)
    })
    this.visible.emit(false)
  }

  selectColor(colorIndex: number) {
    this.selectedColor = colorIndex
  }
}
