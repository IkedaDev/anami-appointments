import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/binnacle/navbar/navbar.component';

@Component({
  selector: 'app-binnacle',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent ],
  templateUrl: './binnacle.component.html',
  styleUrl: './binnacle.component.scss'
})
export class BinnacleComponent {

}
