import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange, ViewChild, ElementRef} from 'angular2/core';

@Component({
    selector: 'bmap-textBox',
    template: `
    <div class="input-field col s6">
        <input #inputNode
               [attr.id]="id" 
               type="text"
               [ngModel]="text"
               (ngModelChange)="update($event)">
        <label [attr.for]="id"
               [class.active]="isActive">
            <ng-content></ng-content>
            {{label}}
        </label>
    </div>`
})
export class TextBox implements OnChanges {
    private static idBase = 'bmapInputId';
    private static lastIdIncrementValue = 0;
    
    public isActive = false;
    
    public id: string;
    
    @Input() label: string;
    
    @Input() text: string;
    @Output() textChange = new EventEmitter();
    
    @ViewChild('inputNode') inputNode: ElementRef;
    
    constructor() {
        this.id = TextBox.idBase + TextBox.lastIdIncrementValue++;
    }
    
    public update(newText: string) {
        this.text = newText;
        this.textChange.emit(newText);
    }
    
    public ngOnChanges(changes: {[key: string]: SimpleChange}) {
        this.isActive = !!changes['text'].currentValue;
        
        if (this.inputNode && this.inputNode.nativeElement === document.activeElement)
            this.isActive = true;
    }
}