import { Component, inject, Input } from '@angular/core';
import { Appointment } from '../../../models/components';
import { CommonModule } from '@angular/common';
import { AppointmentsService } from '../../../services';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './appointment-card.component.html',
})
export class AppointmentCardComponent {
  @Input({required: true}) appointment !: Appointment
  
  private _appointmentService = inject(AppointmentsService)
  private _router = inject(Router)
  
  editAppointment(){
    this._appointmentService.setAppointmentSelected(this.appointment)
    this._router.navigateByUrl(`/add`)
  }


}
