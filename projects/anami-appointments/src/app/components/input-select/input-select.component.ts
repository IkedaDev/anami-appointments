import { Component, Input } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/clickOutside/click-outside.directive';

interface Inputs {
  label: string,
}

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [ ClickOutsideDirective ],
  templateUrl: './input-select.component.html',

})
export class InputSelectComponent {

  @Input({ required: true }) props !: Inputs
  
  public showOptions: boolean = false

  toggleHasClick(): void {
    this.showOptions = !this.showOptions
  }

  handleClickOutside(){
    this.showOptions = false
  }

  

}
