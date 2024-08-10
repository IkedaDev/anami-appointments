import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface InputProps{
  type: 'text' | 'number' | ' password',
  placeholder: string,
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  providers:[
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(()=> InputComponent), multi: true }
  ]
})
export class InputComponent implements ControlValueAccessor{

  @Input({required: true}) props !: InputProps

  value: string = '';
  isDisabled: boolean = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }

}
