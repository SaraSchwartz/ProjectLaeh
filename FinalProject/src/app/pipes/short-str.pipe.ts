import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortStr'
})
export class ShortStrPipe implements PipeTransform {

  transform(myString: string, args?: any): string {
    if (myString.length > 12) {
      myString = myString.slice(0, 12);
      myString += "...";
    }
    return myString;
  }
}




