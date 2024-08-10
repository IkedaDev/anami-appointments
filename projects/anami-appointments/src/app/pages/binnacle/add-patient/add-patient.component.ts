import { Component, inject, OnInit } from '@angular/core';
import { InputComponent } from '../../../components/input/input.component';
import { DateCardComponent } from '../../../components/date-card/date-card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { BasicOptionComponent } from "../../../components/input-select/basic-option/basic-option.component";
import { InputSelectOption } from '../../../models/components';
import { MassageDurationService } from '../../../services';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [InputComponent, DateCardComponent, ReactiveFormsModule, CommonModule, InputSelectComponent, BasicOptionComponent],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent implements OnInit{


  private _fb : FormBuilder = inject(FormBuilder)
  private _massageDuration = inject(MassageDurationService)

  public form : FormGroup = this._fb.group({
    attentionDate: [],
    patient: [],
    massageDuration: [],
    nailCutting: [],
    facialCleansing: []
  })
  durationOptions = new InputSelectOption(this._massageDuration.convertToBasicOption('duration')) 

  ngOnInit(): void {
    this._massageDuration.getMassageDurations().subscribe((massageDurations)=>{
      this._massageDuration.setMassageDuration( massageDurations )
    })

    

  }






}
