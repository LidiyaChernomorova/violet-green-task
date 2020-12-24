import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(@Inject('MainServiceColor') private mainServiceColor: string,
  @Inject('MainServiceArray') private mainServiceArray: number[]) {}

  getColor(): string {
    return this.mainServiceColor;
  }

  getItems(): number[] {
    return this.mainServiceArray;
  }
}
