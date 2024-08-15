import { Component } from '@angular/core';
import * as Components from '../../../components/';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-patient',
  standalone: true,
  imports: [ Components.TitleComponent, Components.DateCardComponent, CommonModule ],
  templateUrl: './history-patient.component.html',
})
export class HistoryPatientComponent {

}
