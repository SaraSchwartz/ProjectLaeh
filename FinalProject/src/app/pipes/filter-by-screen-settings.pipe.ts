import { Pipe, PipeTransform } from '@angular/core';
import { Sequence } from 'src/app/allClasses/Sequence';

@Pipe({
  name: 'filterByScreenSettings',
  pure:false

})
export class FilterByScreenSettingsPipe implements PipeTransform {

  transform(value: Sequence[], args: any): any {
    var res = [];
    value.forEach(element => {
      if ((element.ScreenLength == args.height || args.height == 0) && (element.ScreenWidth == args.width || args.width == 0))
        res.push(element);
    });
    return res;
  }
}
