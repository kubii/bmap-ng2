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
    var TextBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TextBox = (function () {
                function TextBox() {
                    this.isActive = false;
                    this.textChange = new core_1.EventEmitter();
                    this.id = TextBox.idBase + TextBox.lastIdIncrementValue++;
                }
                TextBox.prototype.update = function (newText) {
                    this.text = newText;
                    this.textChange.emit(newText);
                };
                TextBox.prototype.ngOnChanges = function (changes) {
                    this.isActive = !!changes['text'].currentValue;
                    if (this.inputNode && this.inputNode.nativeElement === document.activeElement)
                        this.isActive = true;
                };
                TextBox.idBase = 'bmapInputId';
                TextBox.lastIdIncrementValue = 0;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TextBox.prototype, "label", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TextBox.prototype, "text", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TextBox.prototype, "textChange", void 0);
                __decorate([
                    core_1.ViewChild('inputNode'), 
                    __metadata('design:type', core_1.ElementRef)
                ], TextBox.prototype, "inputNode", void 0);
                TextBox = __decorate([
                    core_1.Component({
                        selector: 'bmap-textBox',
                        template: "\n    <div class=\"input-field col s6\">\n        <input #inputNode\n               [attr.id]=\"id\" \n               type=\"text\"\n               [ngModel]=\"text\"\n               (ngModelChange)=\"update($event)\">\n        <label [attr.for]=\"id\"\n               [class.active]=\"isActive\">\n            <ng-content></ng-content>\n            {{label}}\n        </label>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextBox);
                return TextBox;
            }());
            exports_1("TextBox", TextBox);
        }
    }
});
//# sourceMappingURL=input.js.map