import {Directive, Output, EventEmitter} from 'angular2/core'

@Directive({
    selector: '[onEnter]',
    host: {
        '(keydown)': 'onKeyDown($event)'
    }
})
export class OnEnter {
    @Output() onEnter = new EventEmitter();
    
    public onKeyDown(evt) {
        evt.which === 13 && this.onEnter.emit({
            $event: evt
        });
    }
}