import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myclass]'
})
export class MyclassDirective{

  _myclass:string= "blue";
   colors =["red","green","blue"];
  @Input()
  set myclass(clazz:string){
    console.log("clazz :"+clazz);
    this._myclass = clazz;
    for(let i in this.colors)
    this.el.nativeElement.classList.remove(this.colors[i]);
    this.el.nativeElement.classList.add(this._myclass);
  }
  constructor(private el:ElementRef,private renderer:Renderer2) { }
}
