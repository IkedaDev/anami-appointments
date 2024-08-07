import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPatientComponent } from './history-patient.component';

describe('HistoryPatientComponent', () => {
  let component: HistoryPatientComponent;
  let fixture: ComponentFixture<HistoryPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
