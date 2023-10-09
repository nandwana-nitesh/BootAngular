import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  test(){
      const str = 'Hello World';
      const str$ = of(str);
      str$.subscribe((result) => console.info({ result }));
      // Will emit a single item with the type of string
      // result: "Hello World"

      const arr = [1, 2, 3];
      const arr$ = of(arr);
      arr$.subscribe((result) => console.info({ result }));
      // Will emit a single item with the type of Array<number>
      // result: [1,2,3]

      const arr2 = [4, 5, 6];
      const arr2$ = of(arr, arr2);
      arr2$.subscribe((result) => console.info({ result }));
      // Will emit a single two values each with the type of Array<number>
      // result: [1,2,3]
      // result: [4,5,6]
  }
}
