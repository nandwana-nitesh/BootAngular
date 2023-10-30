import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from2',
  templateUrl: './reactive-from2.component.html',
  styleUrls: ['./reactive-from2.component.css']
})
export class ReactiveFrom2Component {
     
    myFormGroup :FormGroup;
    
    constructor(private fb:FormBuilder){
        this.myFormGroup = this.fb.group({
          firstName: new FormControl('',[Validators.required]),
          lastName:new FormControl(''),
          address: new FormGroup({
               street:new FormControl(''),
               zip:new FormControl(''),
               city:new FormControl(''),
               state:new FormControl('')
           }),
           aliases:new FormArray([new FormControl('')])
        });
    };

    get firstName(){
      return this.myFormGroup.get('firstName') as FormControl;
    }
    get lastName(){
       return this.myFormGroup.get('lastName') as FormControl;
    }
    get address(){
      return this.myFormGroup.get('address') as FormGroup;
    }
    get street(){
       return this.address.get('street') as FormControl;
     }
     get zip(){
       return this.address.get('zip') as FormControl;
     }
     get city(){
       return this.address.get('city') as FormControl;
     }
     get state(){
       return this.address.get('state') as FormControl;
     }
     get aliases(){
       return this.myFormGroup.get('aliases') as FormArray;
     }
     addAlias(){
       this.aliases.push(new FormControl(''));
     }

    submit(){
      
      console.info(this.myFormGroup.value);
    }
}
