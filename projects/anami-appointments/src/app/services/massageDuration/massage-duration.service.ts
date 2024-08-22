import { computed, Injectable, Signal, signal } from '@angular/core';
import { DataWithStatus, MassageDuration } from '../../interfaces';
import { fakeData } from './data';
import * as Rxjs from 'rxjs';
import { BasicOption } from '../../interfaces/components/input-select';

@Injectable({
  providedIn: 'root'
})
export class MassageDurationService {

  private _massageDurations = signal<DataWithStatus<MassageDuration[]>>({
    hasError: false, isLoading: true, isLoad: false
  })

  public massageDuration = this._massageDurations.asReadonly()

  setMassageDuration( massageDuration: MassageDuration[] ): void{
    this._massageDurations.set({
      isLoad: true,
      hasError: false,
      isLoading: false,
      item: massageDuration
    })
  }

  getMassageDurations(): Rxjs.Observable<MassageDuration[]> { 
    return Rxjs.of<MassageDuration[]>(fakeData)
  }

  findById( idMassageDuration :string): Signal<MassageDuration | undefined>{
    return computed<MassageDuration | undefined>( () => this._massageDurations().item?.find( ({id}) => id == idMassageDuration ) )
  }

  convertToBasicOption(name: string): Signal<BasicOption[]>{
    return computed<BasicOption[]>( () => this._massageDurations().item?.map( opt => ({
      key: opt.id,
      label: opt.name,
      name: name,
      title: opt.name,
      value: opt.id,
    } )  ) || [] ) 
  }


}
