System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var StaggeredList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StaggeredList = (function () {
                function StaggeredList(el) {
                    this.el = el;
                    el.nativeElement.style.opacity = 0;
                }
                StaggeredList.prototype.ngOnInit = function () {
                    var time = 0, $ = window['$'];
                    $(this.el.nativeElement)
                        .velocity({ translateX: "-100px" }, { duration: 0 });
                    $(this.el.nativeElement)
                        .velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: time, easing: [60, 10] });
                };
                StaggeredList = __decorate([
                    core_1.Directive({
                        selector: '[bmap-staggeredList]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], StaggeredList);
                return StaggeredList;
            }());
            exports_1("StaggeredList", StaggeredList);
        }
    }
});
//# sourceMappingURL=staggered.list.js.map