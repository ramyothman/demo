import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(data:any,field: any, value: any, args?: any): any {

        if (!data) return [];
        if (value == null || field == null)
            return data
        return data.filter(it =>  it[field] == value);
  }

}
