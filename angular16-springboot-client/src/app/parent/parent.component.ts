import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
     
    items =['banana','apple','blueberry','almond'];

    removeItem(item:String){
      this.items = this.items.filter(i => i!=item);
      
    }
}
