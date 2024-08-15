import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputSelectOption } from '../../../models/components';
import * as Services from '../../../services';
import * as Components from '../../../components';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [ 
    Components.InputComponent, Components.DateCardComponent, ReactiveFormsModule, CommonModule, 
    Components.InputSelectComponent, Components.BasicOptionComponent, Components.TitleComponent, 
    Components.ButtonComponent
  ],
  templateUrl: './add-patient.component.html',
})
export class AddPatientComponent implements OnInit{


  private _fb : FormBuilder = inject(FormBuilder)
  private _massageDuration = inject(Services.MassageDurationService)
  private _nailCuts = inject(Services.NailCutsService)
  private _facialCleansing = inject(Services.FacialCleansingService)
  private _toastAlert = inject(Services.ToastService)

  public form : FormGroup = this._fb.group({
    attentionDate: [],
    patient: [],
    massageDuration: [],
    nailCutting: [],
    facialCleansing: []
  })
  
  durationOptions = new InputSelectOption(this._massageDuration.convertToBasicOption('duration')) 
  nailOptions = new InputSelectOption((this._nailCuts.convertToBasicOption('nails')))
  facialOptions = new InputSelectOption((this._facialCleansing.convertToBasicOption('facials')))

  ngOnInit(): void {
    this._massageDuration.getMassageDurations().subscribe((massageDurations)=>{
      this._massageDuration.setMassageDuration( massageDurations )
    })
    this._nailCuts.getNailCuts().subscribe((nails)=>{
      this._nailCuts.setNailCuts(nails)
    })
    this._facialCleansing.getFacialCleansing().subscribe((facialCleansing)=>{
      this._facialCleansing.setFacialCleansing(facialCleansing)
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
