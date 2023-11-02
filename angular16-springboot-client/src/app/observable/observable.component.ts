import { Component, OnInit } from '@angular/core';
import { Observable, from, of, share } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
  myDate:Date=new Date();
  ngOnInit(): void {
    const myObservable1 = of(1,2,3); 
    const myObservable2 = new Observable((observer)=>{
      setTimeout(()=>{
        observer.next("hello");
        observer.next("world");
        observer.complete();
      },1000)
    }
     
    );
    const myObserver = {
      next:(n:any)=>{console.info(n)},
      error:(e:any)=>{console.error(e)},
      complete:()=>{console.info("completed")}
    };

    myObservable1.subscribe(myObserver);
    myObservable2.subscribe(myObserver);

    //multicasting
    const observable3 = new Observable(observer=>{
        observer.next(Math.random());
      }
    );

    observable3.subscribe(myObserver);
    observable3.subscribe(myObserver);
    observable3.subscribe(myObserver);

    const observable4 = new Observable(observer=>{
      observer.next(Math.random());
    }).pipe(share());

    const myObserver2 = {
      next:(n:any)=>{console.info(n)},
      error:(e:any)=>{console.error(e)},
      complete:()=>{console.info("completed")}
    };

    observable4.subscribe(myObserver2);
    observable4.subscribe(myObserver);
  

  }
}
