import {Pipe, Injectable, PipeTransform} from 'angular2/core'
import {Room} from '../model/Room';

@Pipe({
    name: 'roomsFilter',
    pure: false
})
@Injectable()
export class RoomsFilter implements PipeTransform {
    transform(rooms: Array<Room>, [filterText]) {
        var text = (filterText || '').toLowerCase();
        return rooms.filter(room => 
            room.name.toLowerCase().indexOf(text) !== -1 ||
            room.people.some(person => person.name.toLowerCase().indexOf(text) !== -1));
    }
}