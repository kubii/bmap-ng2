import {Directive, Output, EventEmitter} from 'angular2/core';

@Directive({
    selector: '[bmap-draggable]',
    host: {
        '(mousedown)': 'onMouseDown($event)'
    }
})
export class Draggable {
    @Output() start = new EventEmitter();
    @Output() end = new EventEmitter();
    @Output() move = new EventEmitter();
    
    public onMouseDown(evt) {
        evt.preventDefault();
        
        var that = this;
        var prevOffset = {
            x: evt.offsetX,
            y: evt.offsetY
        };
        document.addEventListener('mousemove', triggerMove);
        document.addEventListener('mouseup', finishDragging);
        this.start.emit(null);
        
        function triggerMove(evt) {
             that.move.emit({
                 offset: {
                     x: evt.offsetX, 
                     y: evt.offsetY
                },
                delta: {
                    x: evt.offsetX - prevOffset.x,
                    y: evt.offsetY - prevOffset.y
                }
            });
            prevOffset = {
                x: evt.offsetX,
                y: evt.offsetY
            };
        }
        
        function finishDragging(evt) {
            document.removeEventListener('mousemove', triggerMove);
            document.removeEventListener('mouseup', finishDragging);
            that.end.emit(null);
        }
    }
}