import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'genderProvide'
})
export class GenderProvidePipe implements PipeTransform {

  transform(value: string): string {
    const firstName = value.split(' ')[0]
    return firstName[firstName.length - 1] == 'a' ? 'świadczyłam' : 'świadczyłem';
  }

}
