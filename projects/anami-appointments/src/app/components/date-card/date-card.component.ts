import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-card',
  standalone: true,
  imports: [ DatePipe ],
  templateUrl: './date-card.component.html',
})
export class DateCardComponent { 

  @Input() date = new Date()

}
