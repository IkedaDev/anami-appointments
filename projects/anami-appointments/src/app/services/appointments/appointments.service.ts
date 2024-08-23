import { computed, Injectable, signal } from '@angular/core';
import { DataWithStatus, FacialCleansing, MassageDuration, NailCut } from '../../interfaces';
import { Appointment, AppointmentAmounts } from '../../models/components';
import { LOCAL_STORAGE_KEY } from '../../enums';
import moment from 'moment';
import 'moment-timezone';

interface SaveAppointment{
  id?: string
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
    hasError: false, isLoad: false, isLoading: true
  });
  private _appointmentSelected = signal<Appointment | null>(null)

  public appointments = this._appointments.asReadonly();
  public appointmentSelected = this._appointmentSelected.asReadonly()

  public total = computed<AppointmentAmounts>( () => this._appointments()?.item?.reduce((totals, appointment) => ({
    hotel: totals.hotel + (appointment.amounts.hotel || 0),
    anami: totals.anami + (appointment.amounts.anami || 0), 
  }), {anami: 0, hotel:0}) || {anami: 0, hotel:0})
  
  constructor(){
    this._initializeAppointments()
  }

  save(appointment: SaveAppointment): void {
    const newAppointment = new Appointment({
        id: appointment.id,
        patient: appointment.patient,
        details: {
            facialCleansing: appointment.details.facialCleansing,
            massageDuration: appointment.details.massageDuration,
            nailCuts: appointment.details.nailCuts,
        }
    });

    this._appointments.update((data) => ({
        ...data,
        item: appointment.id
            ? data.item?.map(a => a.id === appointment.id ? newAppointment : a) || []
            : [newAppointment, ...data.item || []]
    }));

    this.updateAppointmentInLocalStorage(this._appointments().item || []);
  }

  delete(appointmentId: string){
      this._appointments.update( (data) => ({
        ...data,
        item: data.item?.filter( ({id}) => appointmentId !== id )
      }))
      this.updateAppointmentInLocalStorage(this._appointments().item || [])
  }

  updateAppointmentInLocalStorage(appointments: Appointment[]){
    localStorage.setItem(LOCAL_STORAGE_KEY.APPOINTMENTS, JSON.stringify(appointments))
  }

  clearAppointments(){
    localStorage.removeItem(LOCAL_STORAGE_KEY.APPOINTMENTS)
    this._appointments.set({
      hasError: false, isLoad: false, isLoading: true
    })
  }
  
  setAppointmentSelected( appointment: Appointment ): void{
    this._appointmentSelected.set(appointment)
  }

  clearAppointmentSelected(){
    this._appointmentSelected.set(null)
  }

  private _initializeAppointments(){
      this._verifyDateLocalStorage()
      this._appointments.update((data) => ({
        ...data,
        item: this._getAppointmentsByLocalStorage()
      }));
  }

  private _verifyDateLocalStorage(){
    const appointments = this._getAppointmentsByLocalStorage()
    if(appointments.length <= 0) return
    const dateLocalStorage = appointments[0].execDate
    if(
      `${dateLocalStorage.getMonth()}-${dateLocalStorage.getDate()}` !==
      `${moment.tz('America/Santiago').toDate().getMonth()}-${moment.tz('America/Santiago').toDate().getDate()}`
    ){
      localStorage.removeItem(LOCAL_STORAGE_KEY.APPOINTMENTS)
    }
  }

  private _getAppointmentsByLocalStorage(): Appointment[] {
    const appointmentsJson = localStorage.getItem(LOCAL_STORAGE_KEY.APPOINTMENTS)
    if( !appointmentsJson ) return []
    try {
      const parsedAppointmentsData = JSON.parse(appointmentsJson);
      if( !Array.isArray(parsedAppointmentsData) ) return []
      return parsedAppointmentsData.map((data: Appointment) => new Appointment({...data, execDate: moment(data.execDate).tz('America/Santiago').toDate()}));
    } catch (error) {
      console.error('Failed to parse appointments from localStorage:', error);
      return[]
    }
  }
}
