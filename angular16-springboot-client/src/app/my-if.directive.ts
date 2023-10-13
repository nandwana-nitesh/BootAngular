import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {
  
  _myIf:boolean = false;
  @Input()
  set myIf(condition:boolean){
    this._myIf = condition
    this.updateView();
  }
  constructor(private el:ElementRef,private viewContainerRef:ViewContainerRef,private templateRef:TemplateRef<any>) { }

  updateView(){
    console.log("myif"+this._myIf)
    if(this._myIf){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else
      this.viewContainerRef.clear()
  }

}
