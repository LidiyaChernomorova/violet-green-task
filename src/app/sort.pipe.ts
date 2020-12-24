import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })

export class SortPipe implements PipeTransform {
  transform(value: number[]) {

    let arrIndexed = value.map((element, index) => {
      return { element, index };
    });

    return arrIndexed.sort((a, b) => a.element - b.element);
  }
}
