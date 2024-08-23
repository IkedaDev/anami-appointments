import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPatientComponent } from './input-patient.component';

describe('InputPatientComponent', () => {
  let component: InputPatientComponent;
  let fixture: ComponentFixture<InputPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
