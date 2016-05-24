import {Component, Input, Output, EventEmitter, OnDestroy} from 'angular2/core';
import {Room} from '../../model/Room';
import {Point} from '../../model/Point';
import {Draggable} from '../../directive/draggable';

declare var __moduleName: string;

@Component({
    selector: 'bmap-map',
    directives: [Draggable],
    moduleId: __moduleName,
    templateUrl: './template.html'
})
export class MapComponent implements OnDestroy {
    private onKeyDownCallback = this.onKeyDown.bind(this);
    
    @Input() rooms: Array<Room> = [];
    @Input() width: number;
    @Input() height: number;
    @Input() imgsrc: string;
    
    @Input() selection: Room;
    @Output() selectionChange = new EventEmitter(); 
    
    @Input() hovered: Room;
    @Output() hoveredChange = new EventEmitter();
    
    @Output() removedRoom = new EventEmitter();
    
    public draggingRoom: Room;
    
    constructor() {
        document.addEventListener('keydown', this.onKeyDownCallback);
    }
    
    ngOnDestroy() {
        document.removeEventListener('keydown', this.onKeyDownCallback);
    }
    
    public onKeyDown(evt) {
        evt.which === 46 && this.selection && this.removedRoom.emit(this.selection);
    }
    
    public tryClearSelection() {
        if (!this.hovered)
            this.select(null);
    }
    
    public select(room: Room) {
        this.selection = room;
        this.selectionChange.emit(room);
    }
    
    public deselect(room: Room) {
        if (this.selection === room)
            this.select(null);
    }
    
    public hover(room: Room) {
        this.hovered = room;
        this.hoveredChange.emit(room);
    }
    
    public dehover(room: Room) {
        if (this.hovered === room)
            this.hover(null);
    }
    
    public getPolylinePoints(room: Room) {
        return room.points.map(point => point.x + ',' + point.y).join(' ');
    }
    
    public updatePoint(newPoint: Point, oldPoint: Point, room: Room) {
        var firstPoint = room.points[0],
            lastPoint = room.points[room.points.length - 1];
        
        oldPoint.x = newPoint.x;
        oldPoint.y = newPoint.y;
        
        this.keepLastAndFirstPointInSync(newPoint, oldPoint, room);
    }
    
    private keepLastAndFirstPointInSync(newPoint: Point, oldPoint: Point, room: Room) {
        var firstPoint = room.points[0],
            lastPoint = room.points[room.points.length - 1];
        
        if (oldPoint !== firstPoint && oldPoint !== lastPoint)
            return;
            
        firstPoint.x = lastPoint.x = newPoint.x;
        firstPoint.y = lastPoint.y = newPoint.y;
    }
    
    public moveRoom(delta: Point, room: Room) {        
        for (var i = 0; i < room.points.length; i++) {
            var point = room.points[i];
            point.x += delta.x;
            point.y += delta.y;
        }
    }
}