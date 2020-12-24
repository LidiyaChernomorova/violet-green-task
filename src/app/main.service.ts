import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor ( @Inject('MainServiceColor') private MainServiceColor: string) { }

  getIt(){
    return this.MainServiceColor;
  }

  getItems(): number[]{
    return [10, 20, 30, 40, 50];
  }
}
