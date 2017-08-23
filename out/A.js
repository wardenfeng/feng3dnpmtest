"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var B_1 = require("./B");
var A = (function (_super) {
    __extends(A, _super);
    function A() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = 2;
        return _this;
    }
    A.prototype.fa = function () { };
    return A;
}(B_1.B));
exports.A = A;
// /// <reference path="B.ts" />
// namespace feng3d {
//     export class A extends B {
//         a = 2;
//         fa() { }
//     }
// }
