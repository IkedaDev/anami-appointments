import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointment, InputSelectOption } from '../../../models/components';
import * as Services from '../../../services';
import * as Components from '../../../components';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'input-input-patient',
  standalone: true,
  imports: [ 
    Components.InputComponent, Components.DateCardComponent, ReactiveFormsModule, CommonModule, 
    Components.InputSelectComponent, Components.BasicOptionComponent, Components.TitleComponent, 
    Components.ButtonComponent, RouterModule
  ],
  templateUrl: './input-patient.component.html',
})
export class InputPatientComponent implements OnInit, OnDestroy{

  private _fb : FormBuilder = inject(FormBuilder)
  private _massageDuration = inject(Services.MassageDurationService)
  private _nailCuts = inject(Services.NailCutsService)
  private _facialCleansing = inject(Services.FacialCleansingService)
  private _toastAlert = inject(Services.ToastService)
  private _alertService = inject(Services.AlertService)
  private _appointment = inject(Services.AppointmentsService)
  private _router = inject(Router)

  public haveAppointmentSelected = this._appointment.appointmentSelected

  public form : FormGroup = this._fb.group({
    id: [this.haveAppointmentSelected()?.id],
    attentionDate: [this.haveAppointmentSelected()?.execDate],
    patient: [this.haveAppointmentSelected()?.patient],
    massageDuration: [ this.haveAppointmentSelected()?.details.massageDuration.id ],
    nailCutting: [ this.haveAppointmentSelected()?.details.nailCuts.id ],
    facialCleansing: [ this.haveAppointmentSelected()?.details.facialCleansing.id ]
  })
  
  durationOptions = new InputSelectOption(this._massageDuration.convertToBasicOption('duration')) 
  nailOptions = new InputSelectOption((this._nailCuts.convertToBasicOption('nails')))
  facialOptions = new InputSelectOption((this._facialCleansing.convertToBasicOption('facials')))

  ngOnInit(): void {
    this._massageDuration.getMassageDurations().subscribe((massageDurations)=>{
      this._massageDuration.setMassageDuration( massageDurations )
    })
    this._nailCuts.getNailCuts().subscribe((nails)=>{
      this._nailCuts.setNailCuts(nails)
    })
    this._facialCleansing.getFacialCleansing().subscribe((facialCleansing)=>{
      this._facialCleansing.setFacialCleansing(facialCleansing)
    })

  }

  save(){
    if( this.form.invalid ) return 
    if( this.isFormEmpty() ) return

    this._toastAlert.createBuilder()
    .addTitle( !!this.haveAppointmentSelected ? 'Masaje actualizado' : 'Masaje creado')  
    .addIcon('success')
    .build()

    this._appointment.save({
      id: this.form.get('id')?.value,
      patient: this.form.get('patient')?.value || '',
      details:{
        massageDuration: this._massageDuration.findById(this.form.get('massageDuration')!.value)()!,
        nailCuts: this._nailCuts.findById(this.form.get('nailCutting')!.value)()!,
        facialCleansing: this._facialCleansing.findById(this.form.get('facialCleansing')!.value)()!,
      },
    })

    this.form.reset()
    if( !!this.haveAppointmentSelected ){
      this._router.navigateByUrl('history')
    }
  }

  async deleteAppointment(id:string){
    const response = await this._alertService.createBuilder()
      .icon('warning')
      .title('¿Estás segura?')
      .text('¿Deseas eliminar el masaje?')
      .showCancelButton(true)
      .confirmButtonText('Sí, eliminar')
      .cancelButtonText('Cancelar')
      .reverseButtons(true)
      .build()
    if( response.isConfirmed ){
      this._toastAlert.createBuilder()
        .addTitle('Masaje eliminado')  
        .addIcon('success')
        .build()
      this._appointment.delete(id)
      this._router.navigateByUrl('history')
    }
  }

  abortSelectedOption(){
    this._appointment.clearAppointmentSelected()
    this._router.navigateByUrl('history')
  }

  private isFormEmpty(): boolean {
    return this.form.pristine && this.form.untouched;
  }

  ngOnDestroy(): void {
    this._appointment.clearAppointmentSelected()
  }
}
