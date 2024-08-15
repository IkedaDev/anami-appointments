import { computed, Injectable, Signal, signal } from '@angular/core';
import * as Rxjs from 'rxjs';
import { DataWithStatus, FacialCleansing } from '../../interfaces';
import { BasicOption } from '../../interfaces/components/input-select';
import { fakeData } from './data';

@Injectable({
  providedIn: 'root'
})
export class FacialCleansingService {

  private _facialCleansing = signal<DataWithStatus<FacialCleansing[]>>({
    hasError: false, isLoading: true, isLoad: false
  })

  public facialCleansing = this._facialCleansing.asReadonly()

  setFacialCleansing( facialCleansing: FacialCleansing[] ): void{
    this._facialCleansing.set({
      isLoad: true,
      hasError: false,
      isLoading: false,
      item: facialCleansing
    })
  }

  getFacialCleansing(): Rxjs.Observable<FacialCleansing[]> { 
    return Rxjs.of<FacialCleansing[]>(fakeData)
  }

  convertToBasicOption(name: string): Signal<BasicOption[]>{
    return computed<BasicOption[]>( () => this._facialCleansing().item?.map( opt => ({
      key: opt.id,
      label: opt.name,
      name: name,
      title: opt.name,
      value: String(opt.price),
    } )  ) || [] ) 
  }

}
