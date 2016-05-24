System.register(['angular2/core', '../../directive/tabs', '../map/map.component', '../../filter/rooms.filter'], function(exports_1, context_1) {
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
    var core_1, tabs_1, map_component_1, rooms_filter_1;
    var MapsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (rooms_filter_1_1) {
                rooms_filter_1 = rooms_filter_1_1;
            }],
        execute: function() {
            MapsComponent = (function () {
                function MapsComponent(el) {
                    this.el = el;
                    this.tabId = MapsComponent.tabIdBase + MapsComponent.lastIdIncrementValue++;
                    this.mapClick = new core_1.EventEmitter();
                    this.selectedFloorChange = new core_1.EventEmitter();
                    this.removedRoom = new core_1.EventEmitter();
                }
                Object.defineProperty(MapsComponent.prototype, "selectedFloor", {
                    set: function (floor) {
                        this._selectedFloor = floor;
                        this.selectFloor(floor);
                    },
                    enumerable: true,
                    configurable: true
                });
                MapsComponent.prototype.emitSelectFloor = function (floor) {
                    this._selectedFloor = floor;
                    this.selectedFloorChange.emit(floor);
                };
                MapsComponent.prototype.selectFloor = function (floor) {
                    var index = this.floors.indexOf(floor);
                    window['$'](this.el.nativeElement).tabs('select_tab', this.tabId + index);
                };
                MapsComponent.prototype.triggerMapClick = function (evt) {
                    this.mapClick.emit(evt);
                };
                MapsComponent.tabIdBase = 'bmapInputId';
                MapsComponent.lastIdIncrementValue = 0;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MapsComponent.prototype, "floors", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MapsComponent.prototype, "filterText", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapsComponent.prototype, "mapClick", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], MapsComponent.prototype, "selectedFloor", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapsComponent.prototype, "selectedFloorChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapsComponent.prototype, "removedRoom", void 0);
                MapsComponent = __decorate([
                    core_1.Component({
                        selector: 'bmap-maps',
                        directives: [tabs_1.Tabs, map_component_1.MapComponent],
                        pipes: [rooms_filter_1.RoomsFilter],
                        moduleId: __moduleName,
                        templateUrl: './template.html'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MapsComponent);
                return MapsComponent;
            }());
            exports_1("MapsComponent", MapsComponent);
        }
    }
});
//# sourceMappingURL=maps.component.js.map