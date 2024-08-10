import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOptionComponent } from './basic-option.component';

describe('BasicOptionComponent', () => {
  let component: BasicOptionComponent;
  let fixture: ComponentFixture<BasicOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
