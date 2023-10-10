import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, map, of, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private _message = new BehaviorSubject("Hello!!, from Sample Service.");
  
  constructor() { }

  public getMessage() {
    return this._message.asObservable();
  }
  public setMessage(msg:string) {
    this._message.next(msg);
  }

  test(){

      //"Of" RxJs Operator
      //The RxJs Operator "of" converts the argument(s) given to an Observable. It is pretty simple in this regard.
      //We can know that whatever is given to the operator will be returned, just wrapped in an Observable.
      //Each value given as an argument will be separately emitted from the Observable. Some example use cases for "of":

      const str = 'Hello World';
      const str$ = of(str);
      str$.subscribe((result) => console.info( result.toString()));
      // Will emit a single item with the type of string
      // result: "Hello World"

      const arr = [1, 2, 3];
      const arr$ = of(arr);
      arr$.subscribe((result) => console.info(result.toString()));
      // Will emit a single item with the type of Array<number>
      // result: [1,2,3]

      const arr2 = [4, 5, 6];
      const arr2$ = of(arr, arr2);
      arr2$.subscribe((result) => console.info({ result }));
      // Will emit a single two values each with the type of Array<number>
      // result: [1,2,3]
      // result: [4,5,6]
      const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 == 0),
        map(n => n * n)
      );

      // Subscribe to get values
      squareOdd.subscribe(x => console.log(x));


      from([  
        { name: 'Alex', age: 32 },  
        { name: 'Akira', age: 25 },  
        { name: 'Aisha', age: 23 },  
        { name: 'Anisha', age: 16 },  
        { name: 'Anisha', age: 19 },  
        { name: 'Alisha', age: 22 }  
      ]).pipe(filter(person=>person.age>18)).subscribe(person=>console.info(person.age)); 
      
      //values of single property
      from([  
        { name: 'Alex', age: 32 },  
        { name: 'Akira', age: 25 },  
        { name: 'Aisha', age: 23 },  
        { name: 'Anisha', age: 16 },  
        { name: 'Anisha', age: 19 },  
        { name: 'Alisha', age: 22 }  
      ]).pipe(map(person=>person.name)).subscribe(name=>console.info(name));
  }
}
