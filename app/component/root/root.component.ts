import {Component} from 'angular2/core';
import {MapsComponent} from '../maps/maps.component';
import {Room, Person, Floor} from '../../model/model';
import {RoomsFilter} from '../../filter/rooms.filter';
import {RoomService} from '../../service/room.service';
import {OnEnter} from '../../directive/onEnter';
import {Button} from '../../directive/button';
import {Switch} from '../../directive/checkbox';
import {TextBox} from '../../directive/input';
import {StaggeredList} from '../../directive/staggered.list';
import {Tabs} from '../../directive/tabs';

declare var __moduleName: string;

@Component({
    selector: 'bmap-root',
    directives: [OnEnter, Button, Switch, TextBox, StaggeredList, Tabs, MapsComponent],
    pipes: [RoomsFilter],
    moduleId: __moduleName,
    templateUrl: './template.html'
})
export class RootComponent {
    private isDrawing = false;
    private defaultName = 'default';
    
    public areLinesVisible = true;
    public filterText = '';
    public floors: Array<Floor> = [];
    
    public selectedFloor: Floor;
    
    constructor() {
        RoomService.getInstance()
            .getFloors()
            .then(floors => {
                this.floors = <any>floors;
                this.selectedFloor = this.floors[0];
            });
        
        document.addEventListener('keydown', evt => 
            evt.which === 17 && !this.isDrawing && this.startDrawVertex());
        document.addEventListener('keyup', evt =>
            evt.which === 17 && this.stopDrawVertex());
    }
    
    public selectFloorByRoom(room: Room) {
        this.selectedFloor = this.getFloorByRoom(room);
    }
    
    private getFloorByRoom(room: Room) {
        return this.floors.find(floor => floor.rooms.some(currentRoom => currentRoom === room));
    }
    
    public selectFloor(floor: Floor) {
        this.selectedFloor = floor;
    }
    
    public hoverRoom(room: Room) {
        this.selectedFloor.hoveredRoom = room;
    }
    
    public dehoverRoom(room: Room) {
        if (this.selectedFloor.hoveredRoom === room)
            this.selectedFloor.hoveredRoom = null;
    }
    
    public startDrawVertex() {
        var drawingRoom = {name: this.defaultName, points: [], people: []};
        this.selectedFloor.rooms.push(drawingRoom);
        this.selectedFloor.selectedRoom = drawingRoom;
        this.isDrawing = true;
    }
    
    public stopDrawVertex() {
        var drawingRoom = this.selectedFloor.rooms[this.selectedFloor.rooms.length - 1];
        
        if (drawingRoom.points.length < 3)
            this.selectedFloor.rooms.pop();
        else {
            var firstPoint = drawingRoom.points[0];
            drawingRoom.points.push({x: firstPoint.x, y: firstPoint.y});
        }
        
        this.isDrawing = false;
    }
    
    public tryAddVertex(x, y) {
        var drawingRoom = this.selectedFloor.rooms[this.selectedFloor.rooms.length - 1];
        
        if (this.isDrawing)
            drawingRoom.points.push({x: x, y: y});
    }
    
    public removePerson(room: Room, person: Person) {
        room.people.splice(room.people.indexOf(person), 1);
    }
    
    public addPerson(room: Room, personName: string) {
        if (!personName) return;
        
        room.people.push({name: personName});
        room.tempPersonName = undefined;
    }
    
    public removeRoom(room: Room) {
        var floor = this.getFloorByRoom(room);
        
        floor.rooms.splice(floor.rooms.indexOf(room), 1);
    }
    
    public getJSON() {        
        return JSON.stringify(this.floors);
    }
}