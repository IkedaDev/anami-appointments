import { Component, inject } from '@angular/core';
import * as Components from '../../../components/';
import { CommonModule } from '@angular/common';
import { AppointmentsService } from '../../../services';
import { ButtonComponent } from "../../../components/button/button.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-history-patient',
  standalone: true,
  imports: [Components.TitleComponent, Components.DateCardComponent, Components.AppointmentCardComponent, CommonModule, ButtonComponent],
  templateUrl: './history-patient.component.html',
})
export class HistoryPatientComponent {

  private _appointmentsService = inject(AppointmentsService)

  public total = this._appointmentsService.total
  public appointments = this._appointmentsService.appointments
  

  async clearDay(){
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });
    if (result.isConfirmed) {
      this._appointmentsService.clearAppointments()
    }
  }

}
