import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  sayHi(){
    console.log('Hi!');
    return 'Hi!';
  }
}
