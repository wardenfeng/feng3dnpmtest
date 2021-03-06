/// <reference path="Vector3D.ts" />

namespace feng3d {
    /**
     * 颜色
     * @author feng 2016-09-24
     */
    export class Color extends Vector3D {
        /**
         * 红[0,1]
         */
        get r() { return this.x };
        set r(value) { this.x = value; };
        /**
         * 绿[0,1]
         */
        get g() { return this.y };
        set g(value) { this.y = value; };
        /**
         * 蓝[0,1]
         */
        get b() { return this.z };
        set b(value) { this.z = value; };
        /**
         * 透明度[0,1]
         */
        get a() { return this.w };
        set a(value) { this.w = value; };

        /**
         * 构建颜色
         * @param r     红[0,1]
         * @param g     绿[0,1]
         * @param b     蓝[0,1]
         * @param a     透明度[0,1]
         */
        constructor(r = 1, g = 1, b = 1, a = 1) {
            super(r, g, b, a);
        }

        /**
         * 通过
         * @param color 
         * @param hasAlpha 
         */
        fromUnit(color: number, hasAlpha = false) {
            if (hasAlpha)
                this.a = ((color >> 24) & 0xff) / 0xff;
            this.r = ((color >> 16) & 0xff) / 0xff;
            this.g = ((color >> 8) & 0xff) / 0xff;
            this.b = (color & 0xff) / 0xff;
        }

        toInt() {
            var value = (this.a * 0xff) << 24 + (this.r * 0xff) << 16 + (this.g * 0xff) << 8 + (this.b * 0xff);
            return value;
        }

        /**
         * 输出16进制字符串
         */
        toHexString(): string {
            var intR = (this.r * 0xff) | 0;
            var intG = (this.g * 0xff) | 0;
            var intB = (this.b * 0xff) | 0;
            var intA = (this.a * 0xff) | 0;

            return "#" + Color.ToHex(intA) + Color.ToHex(intR) + Color.ToHex(intG) + Color.ToHex(intB);
        }

        /**
         * 混合颜色
         * @param color 混入的颜色
         * @param rate  混入比例
         */
        mix(color: Color, rate = 0.5) {
            this.r = this.r * (1 - rate) + color.r * rate;
            this.g = this.g * (1 - rate) + color.g * rate;
            this.b = this.b * (1 - rate) + color.b * rate;
            this.a = this.a * (1 - rate) + color.a * rate;
            return this;
        }

        /**
         * 输出字符串
         */
        toString(): string {
            return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}";
        }

        /**
         * [0,15]数值转为16进制字符串
         * param i  [0,15]数值
         */
        static ToHex(i: number): string {
            var str = i.toString(16);
            if (i <= 0xf) {
                return ("0" + str).toUpperCase();
            }
            return str.toUpperCase();
        }
    }
}