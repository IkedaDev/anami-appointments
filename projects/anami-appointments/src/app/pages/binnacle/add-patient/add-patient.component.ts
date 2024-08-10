import { Component, inject, OnInit, signal } from '@angular/core';
import { InputComponent } from '../../../components/input/input.component';
import { DateCardComponent } from '../../../components/date-card/date-card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { BasicOptionComponent } from "../../../components/input-select/basic-option/basic-option.component";
import { InputSelectOption } from '../../../models/components';
import { MassageDurationService, ToastService } from '../../../services';
import { BasicOption } from '../../../interfaces/components/input-select';
import { TitleComponent } from '../../../components/title/title.component';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [InputComponent, DateCardComponent, ReactiveFormsModule, CommonModule, InputSelectComponent, BasicOptionComponent, TitleComponent, ButtonComponent],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent implements OnInit{


  private _fb : FormBuilder = inject(FormBuilder)
  private _massageDuration = inject(MassageDurationService)
  private _toastAlert = inject(ToastService)

  public form : FormGroup = this._fb.group({
    attentionDate: [],
    patient: [],
    massageDuration: [],
    nailCutting: [],
    facialCleansing: []
  })
  
  durationOptions = new InputSelectOption(this._massageDuration.convertToBasicOption('duration')) 

  nailOptions = new InputSelectOption(signal<BasicOption[]>([
    { key: '3',label:'Si', name:'nails', title: 'Si', value:'5000' },
    { key: '4',label:'No', name:'nails', title: 'Si', value:'0' },
  ]))

  facialOptions = new InputSelectOption(signal<BasicOption[]>([
    { key: '5', label:'No', name:'facial', title: 'No', value:'0' },
    { key: '6', label:'Hombre', name:'facial', title: 'Hombre', value:'10000' },
    { key: '7', label:'Mujer', name:'facial', title: 'Mujer', value:'15000' },
  ]))


  ngOnInit(): void {
    this._massageDuration.getMassageDurations().subscribe((massageDurations)=>{
      this._massageDuration.setMassageDuration( massageDurations )
    })

  }

  save(){
    if(this.form.invalid) return 
    
    this._toastAlert.createBuilder()
    .addTitle('Masaje creado')  
    .addIcon('success')
    .build()

  }




}
