import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  public isYellowFloresDay = signal<boolean>(new Date().getDate() === 21 && new Date().getMonth() === 2)

}
