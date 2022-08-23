import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'momentPipe' })
export class MomentPipe implements PipeTransform {
    transform(value: Date | moment.Moment | number | string| undefined, dateFormat: string): any {
        if(!value){
          return 'missing date value'
        }
        return moment(value).format(dateFormat);
    }
}
