import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{

    public myFormGroup:FormGroup;
    chkArray=[{"value":"red","name":"red","selected":false},
            {"value":"green","name":"green","selected":false},
            {"value":"blue","name":"blue","selected":false}]
    
    constructor(private formbuilder:FormBuilder){
      this.myFormGroup = this.formbuilder.group(
        {checkboxes:new FormArray([],[Validators.required]),
        name:new FormControl('',Validators.required)}
       );
    }
   get name(){
    return this.myFormGroup.get("name") as FormControl;
   }
    onChangeChk(event:any){
      const chkControl= this.myFormGroup.get("checkboxes") as FormArray;
     
      
      console.log(this.myFormGroup.get("name")?.value);
      if(event.currentTarget.checked){
        chkControl.push(new FormControl(event.currentTarget.value));
      }else{
           for(let i=0;i<=chkControl.controls.length;i++){
             if(chkControl.controls[i].value==event.target.value){
               chkControl.removeAt(i);
             }
            }
      }
    }
    submit(){
      if(this.myFormGroup.valid){
        console.info(this.myFormGroup.value)
      }else{
        console.info(this.myFormGroup.value)
      }
    }
}
