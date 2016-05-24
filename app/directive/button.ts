import {Component, Input} from 'angular2/core';

@Component({
    selector: 'bmap-button',
    template: `
    <a class="waves-effect waves-light btn {{color}}"
       [ngClass]="{'btn-floating': floating}">
        <i class="material-icons"
           [ngClass]="iconAlign">
            {{icon}}
        </i>
        <ng-content></ng-content>
    </a>`
})
export class Button {
    @Input() icon: string;
    @Input() iconAlign = 'left';
    @Input() color: string;
    @Input() floating = false;
}