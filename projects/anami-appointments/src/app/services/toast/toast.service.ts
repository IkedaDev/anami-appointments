import { Injectable } from '@angular/core';
import { ToastBuilder } from './toast-builder';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  createBuilder(){
    return new ToastBuilder()
  }

}



