import { Component, inject } from '@angular/core';
import * as Components from '../../../components/';
import { CommonModule } from '@angular/common';
import { AppointmentsService } from '../../../services';

@Component({
  selector: 'app-history-patient',
  standalone: true,
  imports: [ Components.TitleComponent, Components.DateCardComponent, Components.AppointmentCardComponent, CommonModule ],
  templateUrl: './history-patient.component.html',
})
export class HistoryPatientComponent {

  private _appointmentsService = inject(AppointmentsService)
  
  public total = this._appointmentsService.total
  public appointments = this._appointmentsService.appointments
  

}
