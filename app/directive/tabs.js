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
    var Tabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Tabs = (function () {
                function Tabs(element) {
                    this.element = element;
                }
                Object.defineProperty(Tabs.prototype, "tabItems", {
                    set: function (value) {
                        var _this = this;
                        value.changes.subscribe(function (items) {
                            return window['$'](_this.element.nativeElement).find('ul').tabs();
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.ContentChildren('tabItem'), 
                    __metadata('design:type', core_1.QueryList), 
                    __metadata('design:paramtypes', [core_1.QueryList])
                ], Tabs.prototype, "tabItems", null);
                Tabs = __decorate([
                    core_1.Directive({
                        selector: '[bmap-tabs]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Tabs);
                return Tabs;
            }());
            exports_1("Tabs", Tabs);
        }
    }
});
//# sourceMappingURL=tabs.js.map