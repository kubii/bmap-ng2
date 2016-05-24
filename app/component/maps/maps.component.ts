import {Component, Input, Output, EventEmitter, ElementRef} from 'angular2/core';
import {Floor, Room} from '../../model/model';
import {Tabs} from '../../directive/tabs';
import {MapComponent} from '../map/map.component';
import {RoomsFilter} from '../../filter/rooms.filter';

declare var __moduleName: string;

@Component({
    selector: 'bmap-maps',
    directives: [Tabs, MapComponent],
    pipes: [RoomsFilter],
    moduleId: __moduleName,
    templateUrl: './template.html'
})
export class MapsComponent {
    private static tabIdBase = 'bmapInputId';
    private static lastIdIncrementValue = 0;
    public tabId = MapsComponent.tabIdBase + MapsComponent.lastIdIncrementValue++;
    
    @Input() floors: Array<Floor>;
    @Input() filterText: string;
    
    @Output() mapClick = new EventEmitter();
    
    public _selectedFloor: Floor;
    @Input() set selectedFloor(floor: Floor) {
        this._selectedFloor = floor;
        this.selectFloor(floor);
    }
    @Output() selectedFloorChange = new EventEmitter();
    
    @Output() removedRoom = new EventEmitter();
    
    constructor (private el: ElementRef) { }
    
    public emitSelectFloor(floor: Floor) {
        this._selectedFloor = floor;
        this.selectedFloorChange.emit(floor);
    }
    
    public selectFloor(floor: Floor) {
        let index = this.floors.indexOf(floor);
        window['$'](this.el.nativeElement).tabs('select_tab', this.tabId + index);
    }
    
    public triggerMapClick(evt) {
        this.mapClick.emit(evt);
    }
}