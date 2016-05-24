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
    var Switch;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Switch = (function () {
                function Switch() {
                    this.isCheckedChange = new core_1.EventEmitter();
                }
                Switch.prototype.update = function (newValue) {
                    this.isChecked = newValue;
                    this.isCheckedChange.emit(newValue);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Switch.prototype, "isChecked", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Switch.prototype, "isCheckedChange", void 0);
                Switch = __decorate([
                    core_1.Component({
                        selector: 'bmap-switch',
                        template: "\n    <div class=\"switch\">\n        <label>\n            <ng-content></ng-content> \n            Off\n            <input type=\"checkbox\"\n                   [ngModel]=\"isChecked\"\n                   (ngModelChange)=\"update($event)\">\n            <span class=\"lever\"></span>\n            On\n        </label>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Switch);
                return Switch;
            }());
            exports_1("Switch", Switch);
        }
    }
});
//# sourceMappingURL=checkbox.js.map