import { Directive, ElementRef, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter()

  private el = inject(ElementRef)

  @HostListener('document:click',['$event'])
  onDocumentClick(event: MouseEvent){
    if(!this.el.nativeElement.contains(event.target)){
      this.clickOutside.emit(true)
    }
  }

  constructor() { }

}
