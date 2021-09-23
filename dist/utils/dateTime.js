"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NowTime = void 0;
var now = new Date();
var NowTime = /** @class */ (function () {
    function NowTime(year, month, day, hour, minute, second, dayOfWeek) {
        if (year === void 0) { year = now.getFullYear(); }
        if (month === void 0) { month = now.getMonth() + 1; }
        if (day === void 0) { day = now.getDate(); }
        if (hour === void 0) { hour = now.getHours(); }
        if (minute === void 0) { minute = now.getMinutes(); }
        if (second === void 0) { second = now.getSeconds(); }
        if (dayOfWeek === void 0) { dayOfWeek = now.getDay(); }
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.dayOfWeek = dayOfWeek;
    }
    NowTime.prototype.nowTimeStr = function () {
        var str = this.year + "-" + this.month + "-" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second;
        return str;
    };
    return NowTime;
}());
exports.NowTime = NowTime;
