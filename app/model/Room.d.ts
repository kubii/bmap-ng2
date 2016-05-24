import {Point} from './Point';
import {Person} from './Person';

export interface Room {
    name: string;
    points: Array<Point>;
    people: Array<Person>;
    tempPersonName?: string;
}