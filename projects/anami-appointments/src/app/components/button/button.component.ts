import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Props{
  type: 'submit' | 'button' | 'reset',
  value: string,
  // click?(): void,
  color: 'success' | 'danger' | 'warning'
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input({required: true}) props !: Props
  @Output() onClick = new EventEmitter()

  handlerClick(){
    // if(this.props.click ) this.props.click()
      this.onClick.emit()
  }

}
