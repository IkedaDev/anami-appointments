import { Component } from '@angular/core';
import { TitleComponent } from '../../../components/title/title.component';
import { DateCardComponent } from '../../../components/date-card/date-card.component';

@Component({
  selector: 'app-history-patient',
  standalone: true,
  imports: [ TitleComponent, DateCardComponent ],
  templateUrl: './history-patient.component.html',
  styleUrl: './history-patient.component.scss'
})
export class HistoryPatientComponent {

}
