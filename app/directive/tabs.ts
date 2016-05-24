import {Directive, ContentChildren, QueryList, ElementRef} from 'angular2/core';

@Directive({
    selector: '[bmap-tabs]'
})
export class Tabs {
    @ContentChildren('tabItem')
    set tabItems(value: QueryList<ElementRef>) {
        value.changes.subscribe(items =>
            window['$'](this.element.nativeElement).find('ul').tabs());
    }
    
    constructor(private element: ElementRef) { }
}