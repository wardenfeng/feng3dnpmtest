"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数学常量类
 */
var MathConsts = (function () {
    function MathConsts() {
    }
    /**
     * 弧度转角度因子
     */
    MathConsts.RADIANS_TO_DEGREES = 180 / Math.PI;
    /**
     * 角度转弧度因子
     */
    MathConsts.DEGREES_TO_RADIANS = Math.PI / 180;
    return MathConsts;
}());
exports.MathConsts = MathConsts;
