import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'bmap-switch',
    template: `
    <div class="switch">
        <label>
            <ng-content></ng-content> 
            Off
            <input type="checkbox"
                   [ngModel]="isChecked"
                   (ngModelChange)="update($event)">
            <span class="lever"></span>
            On
        </label>
    </div>`
})
export class Switch {
    @Input() isChecked: boolean;
    @Output() isCheckedChange = new EventEmitter();
    
    public update(newValue) {
        this.isChecked = newValue;
        this.isCheckedChange.emit(newValue);
    }
}