import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, length = 15): string {
    if (value.length < length) {
      return value;
    }
    return value.substring(0, length) + '...';
  }
}
