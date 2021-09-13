const now = new Date();

interface IDateTime {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    dayOfWeek: number;
}

export class NowTime implements IDateTime {
    constructor(
        public year: number = now.getFullYear(),
        public month: number = now.getMonth() + 1,
        public day: number = now.getDate(),
        public hour: number = now.getHours(),
        public minute: number = now.getMinutes(),
        public second: number = now.getSeconds(),
        public dayOfWeek: number = now.getDay()
    ){}

    nowTimeStr() {
        const str: string = `${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}:${this.second}`;

        return str;
    }
}
