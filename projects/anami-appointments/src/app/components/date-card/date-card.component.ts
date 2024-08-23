import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-date-card',
  standalone: true,
  imports: [ DatePipe ],
  templateUrl: './date-card.component.html',
})
export class DateCardComponent { 
  @Input() date: Date = moment.tz('America/Santiago').toDate()
}
