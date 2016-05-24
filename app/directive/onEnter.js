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
    var OnEnter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OnEnter = (function () {
                function OnEnter() {
                    this.onEnter = new core_1.EventEmitter();
                }
                OnEnter.prototype.onKeyDown = function (evt) {
                    evt.which === 13 && this.onEnter.emit({
                        $event: evt
                    });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], OnEnter.prototype, "onEnter", void 0);
                OnEnter = __decorate([
                    core_1.Directive({
                        selector: '[onEnter]',
                        host: {
                            '(keydown)': 'onKeyDown($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnEnter);
                return OnEnter;
            }());
            exports_1("OnEnter", OnEnter);
        }
    }
});
//# sourceMappingURL=onEnter.js.map