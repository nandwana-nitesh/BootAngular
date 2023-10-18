import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() items:String[]=[];

  @Output()
  itemEvent = new EventEmitter<String>();

  removeItem(item:String){
    this.itemEvent.emit(item);
  }
}
