import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasicOption } from '../../../interfaces/components/input-select';

@Component({
  selector: 'app-basic-option',
  standalone: true,
  imports: [],
  templateUrl: './basic-option.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( ()=> BasicOptionComponent ),
      multi: true,
    }
  ],
})
export class BasicOptionComponent implements ControlValueAccessor {

  @Input({ required: true }) option !: BasicOption

  isChecked : boolean = false;

  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: (_: any) => void = () => {};

  
  onChange(event: any) {
    this.onChangeCallback(this.option.value);
  }

  writeValue(value: any): void {
    this.isChecked = value === this.option.value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

}
