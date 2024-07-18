import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'signVisibility',
  standalone: true
})
export class SignVisibilityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
