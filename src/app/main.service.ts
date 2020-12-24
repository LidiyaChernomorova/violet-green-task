import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getItems(): number[]{
    return [10, 20, 30, 40, 50];
  }
}
