import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-yellow-flowers',
  standalone: true,
  imports: [],
  templateUrl:'./yellow-flowers.component.html',
  styleUrl: './yellow-flowers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YellowFlowersComponent { 

  public isBlur = signal<boolean>(false);

  toggleBlur(){
    this.isBlur.update(prev => !prev)
  }

}
