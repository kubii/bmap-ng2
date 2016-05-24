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
    var Draggable;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Draggable = (function () {
                function Draggable() {
                    this.start = new core_1.EventEmitter();
                    this.end = new core_1.EventEmitter();
                    this.move = new core_1.EventEmitter();
                }
                Draggable.prototype.onMouseDown = function (evt) {
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
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Draggable.prototype, "start", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Draggable.prototype, "end", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Draggable.prototype, "move", void 0);
                Draggable = __decorate([
                    core_1.Directive({
                        selector: '[bmap-draggable]',
                        host: {
                            '(mousedown)': 'onMouseDown($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Draggable);
                return Draggable;
            }());
            exports_1("Draggable", Draggable);
        }
    }
});
//# sourceMappingURL=draggable.js.map