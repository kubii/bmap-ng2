System.register(['angular2/core', '../maps/maps.component', '../../filter/rooms.filter', '../../service/room.service', '../../directive/onEnter', '../../directive/button', '../../directive/checkbox', '../../directive/input', '../../directive/staggered.list', '../../directive/tabs'], function(exports_1, context_1) {
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
    var core_1, maps_component_1, rooms_filter_1, room_service_1, onEnter_1, button_1, checkbox_1, input_1, staggered_list_1, tabs_1;
    var RootComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (maps_component_1_1) {
                maps_component_1 = maps_component_1_1;
            },
            function (rooms_filter_1_1) {
                rooms_filter_1 = rooms_filter_1_1;
            },
            function (room_service_1_1) {
                room_service_1 = room_service_1_1;
            },
            function (onEnter_1_1) {
                onEnter_1 = onEnter_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (staggered_list_1_1) {
                staggered_list_1 = staggered_list_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            }],
        execute: function() {
            RootComponent = (function () {
                function RootComponent() {
                    var _this = this;
                    this.isDrawing = false;
                    this.defaultName = 'default';
                    this.areLinesVisible = true;
                    this.filterText = '';
                    this.floors = [];
                    room_service_1.RoomService.getInstance()
                        .getFloors()
                        .then(function (floors) {
                        _this.floors = floors;
                        _this.selectedFloor = _this.floors[0];
                    });
                    document.addEventListener('keydown', function (evt) {
                        return evt.which === 17 && !_this.isDrawing && _this.startDrawVertex();
                    });
                    document.addEventListener('keyup', function (evt) {
                        return evt.which === 17 && _this.stopDrawVertex();
                    });
                }
                RootComponent.prototype.selectFloorByRoom = function (room) {
                    this.selectedFloor = this.getFloorByRoom(room);
                };
                RootComponent.prototype.getFloorByRoom = function (room) {
                    return this.floors.find(function (floor) { return floor.rooms.some(function (currentRoom) { return currentRoom === room; }); });
                };
                RootComponent.prototype.selectFloor = function (floor) {
                    this.selectedFloor = floor;
                };
                RootComponent.prototype.hoverRoom = function (room) {
                    this.selectedFloor.hoveredRoom = room;
                };
                RootComponent.prototype.dehoverRoom = function (room) {
                    if (this.selectedFloor.hoveredRoom === room)
                        this.selectedFloor.hoveredRoom = null;
                };
                RootComponent.prototype.startDrawVertex = function () {
                    var drawingRoom = { name: this.defaultName, points: [], people: [] };
                    this.selectedFloor.rooms.push(drawingRoom);
                    this.selectedFloor.selectedRoom = drawingRoom;
                    this.isDrawing = true;
                };
                RootComponent.prototype.stopDrawVertex = function () {
                    var drawingRoom = this.selectedFloor.rooms[this.selectedFloor.rooms.length - 1];
                    if (drawingRoom.points.length < 3)
                        this.selectedFloor.rooms.pop();
                    else {
                        var firstPoint = drawingRoom.points[0];
                        drawingRoom.points.push({ x: firstPoint.x, y: firstPoint.y });
                    }
                    this.isDrawing = false;
                };
                RootComponent.prototype.tryAddVertex = function (x, y) {
                    var drawingRoom = this.selectedFloor.rooms[this.selectedFloor.rooms.length - 1];
                    if (this.isDrawing)
                        drawingRoom.points.push({ x: x, y: y });
                };
                RootComponent.prototype.removePerson = function (room, person) {
                    room.people.splice(room.people.indexOf(person), 1);
                };
                RootComponent.prototype.addPerson = function (room, personName) {
                    if (!personName)
                        return;
                    room.people.push({ name: personName });
                    room.tempPersonName = undefined;
                };
                RootComponent.prototype.removeRoom = function (room) {
                    var floor = this.getFloorByRoom(room);
                    floor.rooms.splice(floor.rooms.indexOf(room), 1);
                };
                RootComponent.prototype.getJSON = function () {
                    return JSON.stringify(this.floors);
                };
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'bmap-root',
                        directives: [onEnter_1.OnEnter, button_1.Button, checkbox_1.Switch, input_1.TextBox, staggered_list_1.StaggeredList, tabs_1.Tabs, maps_component_1.MapsComponent],
                        pipes: [rooms_filter_1.RoomsFilter],
                        moduleId: __moduleName,
                        templateUrl: './template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            }());
            exports_1("RootComponent", RootComponent);
        }
    }
});
//# sourceMappingURL=root.component.js.map