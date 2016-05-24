import {Directive, ElementRef, OnInit} from 'angular2/core'

@Directive({
    selector: '[bmap-staggeredList]'
})
export class StaggeredList implements OnInit {    
    constructor(private el: ElementRef) {
        el.nativeElement.style.opacity = 0;
    }
    
    public ngOnInit() {
        let time = 0,
            $ = window['$'];
            
        $(this.el.nativeElement)
            .velocity({ translateX: "-100px" }, { duration: 0 });

        $(this.el.nativeElement)
            .velocity({ opacity: "1", translateX: "0"}, { duration: 800, delay: time, easing: [60, 10] });
    }
}