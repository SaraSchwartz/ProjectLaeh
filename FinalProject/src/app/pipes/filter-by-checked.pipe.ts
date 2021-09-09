import { Pipe, PipeTransform } from '@angular/core';
import { myColor } from 'src/app/allClasses/myColor';
import { purePipeDef } from '@angular/core/src/view/pure_expression';
import { ChangeDetectionStrategy, ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';

@Pipe({
  name: 'filterByChecked',
  pure: false
})
export class FilterByCheckedPipe implements PipeTransform {


  transform(value: myColor[], args: any): any {
    var res = [];
    if (value !== undefined) {
      value.forEach(element => {
        if (element.isChecked == args.isChecked)
          res.push(element);
      });
    }
    return res;
  }

}
