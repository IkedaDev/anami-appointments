import { Injectable } from '@angular/core';
import { AlertBuilder } from './alert-builder';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  createBuilder(){
    return new AlertBuilder()
  }
}
