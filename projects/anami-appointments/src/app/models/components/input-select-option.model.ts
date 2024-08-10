import { computed, signal, Signal } from "@angular/core";
import { BasicOption } from "../../interfaces/components/input-select";

export class InputSelectOption{

    constructor(
      private _options: Signal<BasicOption[]> = signal<BasicOption[]>([])
    ){}

    get options(): Signal<BasicOption[]>{
      return this._options
    }

    setLabel(value: string, defaultOption: string): Signal<string> {
      return computed(() => this._options().find( opt => opt.value === value)?.label || defaultOption)
    }


}