import { Pipe, PipeTransform } from '@angular/core';
import { Sequence } from 'src/app/allClasses/Sequence';

@Pipe({
  name: 'filterByText',
  pure:false
})
export class FilterByTextPipe implements PipeTransform {

  transform(value: Sequence[], search: string): any {
    var res = [];
    if (value !== undefined) {
      value.forEach(element => {
        if (element.Name.indexOf(search) > -1 || search == null)
          res.push(element);
      });
    }
    return res;
  }


}





