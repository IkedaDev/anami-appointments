import { Component, inject } from '@angular/core';
import * as Components from '../../../components/';
import { CommonModule } from '@angular/common';
import { AlertService, AppointmentsService } from '../../../services';
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
  private _alertService = inject(AlertService)

  public total = this._appointmentsService.total
  public appointments = this._appointmentsService.appointments
  

  async clearDay(){
    const result = await this._alertService.createBuilder()
      .icon('warning')
      .title('¿Estás segura?')
      .text('Esta acción no se puede deshacer.')
      .showCancelButton(true)
      .confirmButtonText('Sí, continuar')
      .cancelButtonText('Cancelar')
      .reverseButtons(true)
      .build()

    if (result.isConfirmed) {
      this._appointmentsService.clearAppointments()
    }
  }

}
