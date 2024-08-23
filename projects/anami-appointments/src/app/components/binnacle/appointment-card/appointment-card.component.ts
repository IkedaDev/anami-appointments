import { Component, Input } from '@angular/core';
import { Appointment } from '../../../models/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-card.component.html',
})
export class AppointmentCardComponent {
  @Input({required: true}) appointment !: Appointment
  
}
