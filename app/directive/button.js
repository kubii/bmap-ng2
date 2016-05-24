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
    var Button;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Button = (function () {
                function Button() {
                    this.iconAlign = 'left';
                    this.floating = false;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Button.prototype, "icon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Button.prototype, "iconAlign", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Button.prototype, "color", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Button.prototype, "floating", void 0);
                Button = __decorate([
                    core_1.Component({
                        selector: 'bmap-button',
                        template: "\n    <a class=\"waves-effect waves-light btn {{color}}\"\n       [ngClass]=\"{'btn-floating': floating}\">\n        <i class=\"material-icons\"\n           [ngClass]=\"iconAlign\">\n            {{icon}}\n        </i>\n        <ng-content></ng-content>\n    </a>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Button);
                return Button;
            }());
            exports_1("Button", Button);
        }
    }
});
//# sourceMappingURL=button.js.map