import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'namesearch',
    pure: false,
})
@Injectable()
export class NameSearchPipe implements PipeTransform {

    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.name.toLowerCase().includes(filter) 
        || item.address.toLowerCase().includes(filter));
    }    
}
