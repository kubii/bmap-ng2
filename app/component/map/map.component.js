System.register(['angular2/core', '../../directive/draggable'], function(exports_1, context_1) {
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
    var core_1, draggable_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (draggable_1_1) {
                draggable_1 = draggable_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                    this.onKeyDownCallback = this.onKeyDown.bind(this);
                    this.rooms = [];
                    this.selectionChange = new core_1.EventEmitter();
                    this.hoveredChange = new core_1.EventEmitter();
                    this.removedRoom = new core_1.EventEmitter();
                    document.addEventListener('keydown', this.onKeyDownCallback);
                }
                MapComponent.prototype.ngOnDestroy = function () {
                    document.removeEventListener('keydown', this.onKeyDownCallback);
                };
                MapComponent.prototype.onKeyDown = function (evt) {
                    evt.which === 46 && this.selection && this.removedRoom.emit(this.selection);
                };
                MapComponent.prototype.tryClearSelection = function () {
                    if (!this.hovered)
                        this.select(null);
                };
                MapComponent.prototype.select = function (room) {
                    this.selection = room;
                    this.selectionChange.emit(room);
                };
                MapComponent.prototype.deselect = function (room) {
                    if (this.selection === room)
                        this.select(null);
                };
                MapComponent.prototype.hover = function (room) {
                    this.hovered = room;
                    this.hoveredChange.emit(room);
                };
                MapComponent.prototype.dehover = function (room) {
                    if (this.hovered === room)
                        this.hover(null);
                };
                MapComponent.prototype.getPolylinePoints = function (room) {
                    return room.points.map(function (point) { return point.x + ',' + point.y; }).join(' ');
                };
                MapComponent.prototype.updatePoint = function (newPoint, oldPoint, room) {
                    var firstPoint = room.points[0], lastPoint = room.points[room.points.length - 1];
                    oldPoint.x = newPoint.x;
                    oldPoint.y = newPoint.y;
                    this.keepLastAndFirstPointInSync(newPoint, oldPoint, room);
                };
                MapComponent.prototype.keepLastAndFirstPointInSync = function (newPoint, oldPoint, room) {
                    var firstPoint = room.points[0], lastPoint = room.points[room.points.length - 1];
                    if (oldPoint !== firstPoint && oldPoint !== lastPoint)
                        return;
                    firstPoint.x = lastPoint.x = newPoint.x;
                    firstPoint.y = lastPoint.y = newPoint.y;
                };
                MapComponent.prototype.moveRoom = function (delta, room) {
                    for (var i = 0; i < room.points.length; i++) {
                        var point = room.points[i];
                        point.x += delta.x;
                        point.y += delta.y;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MapComponent.prototype, "rooms", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MapComponent.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MapComponent.prototype, "height", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MapComponent.prototype, "imgsrc", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "selection", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "selectionChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "hovered", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "hoveredChange", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "removedRoom", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'bmap-map',
                        directives: [draggable_1.Draggable],
                        moduleId: __moduleName,
                        templateUrl: './template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map