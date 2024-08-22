import { computed, Injectable, signal } from '@angular/core';
import { DataWithStatus, FacialCleansing, MassageDuration, NailCut } from '../../interfaces';
import { Appointment, AppointmentAmounts } from '../../models/components';

interface SaveAppointment{
  patient: string
  details: {
      massageDuration: MassageDuration,
      facialCleansing: FacialCleansing,
      nailCuts: NailCut,
  },
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private _appointments = signal<DataWithStatus<Appointment[]>>({
    hasError: false, isLoad: false, isLoading: true, 
  });

  public appointments = this._appointments.asReadonly();

  public total = computed<AppointmentAmounts>( () => this._appointments()?.item?.reduce((totals, appointment) => ({
    hotel: totals.hotel + (appointment.amounts.hotel || 0),
    anami: totals.anami + (appointment.amounts.anami || 0), 
  }), {anami: 0, hotel:0}) || {anami: 0, hotel:0})
  
  save(appointment: SaveAppointment ): void {

    return this._appointments.update((data) => ({
      ...data,
      item: [...data.item || [], new Appointment(
        appointment.patient,
        { 
          facialCleansing: appointment.details.facialCleansing,
          massageDuration: appointment.details.massageDuration,
          nailCuts: appointment.details.nailCuts,
        }
      )] 
    }))
  }
  
}
