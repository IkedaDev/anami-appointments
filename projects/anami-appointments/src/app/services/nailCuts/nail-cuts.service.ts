import { computed, Injectable, Signal, signal } from '@angular/core';
import { BasicOption } from '../../interfaces/components/input-select';
import { DataWithStatus, NailCut } from '../../interfaces';
import * as Rxjs from 'rxjs'
import { fakeData } from './data';

@Injectable({
  providedIn: 'root'
})
export class NailCutsService {

  private _nailCuts = signal<DataWithStatus<NailCut[]>>({
    hasError: false, isLoading: true, isLoad: false
  })

  public nailCuts = this._nailCuts.asReadonly()

  setNailCuts( nailCuts: NailCut[] ): void{
    this._nailCuts.set({
      isLoad: true,
      hasError: false,
      isLoading: false,
      item: nailCuts
    })
  }

  getNailCuts(): Rxjs.Observable<NailCut[]> { 
    return Rxjs.of<NailCut[]>(fakeData)
  }

  findById( idNailCut :string): Signal<NailCut | undefined>{
    return computed<NailCut | undefined>( () => this._nailCuts().item?.find( ({id}) => id == idNailCut ) )
  }

  convertToBasicOption(name: string): Signal<BasicOption[]>{
    return computed<BasicOption[]>( () => this._nailCuts().item?.map( opt => ({
      key: opt.id,
      label: opt.name,
      name: name,
      title: opt.name,
      value: opt.id,
    } )  ) || [] ) 
  }

}
