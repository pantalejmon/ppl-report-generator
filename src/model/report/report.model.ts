import * as dayjs from "dayjs";

export const HOURS = 'Hours';
export const KEY = 'Issue Key';
export const SUMMARY = 'Issue summary';
export const DATE = 'Work date';
export const NAME = 'Full name';
export const USERNAME = 'Username';

export class Report {
    username: string = '';
    name: string = '';
    date: string = ''
    period: string;
    tasks: Task[] = [];

    constructor(value: Object = {}) {
        Object.assign(this, value);
    }

    prepareDate(): void {
        const date = this.getDateOfLastDayInMonth();

        const day = `${date.date()}`.padStart(2, '0');
        const month = `${date.month() + 1}`.padStart(2, '0');

        this.date = `${day}.${month}.${date.year()}`;
    }

    sumHours(): number {
        return this.tasks
            .map(task => +task.hours)
            .reduce((a, b) => a + b, 0);
    }

    private getDateOfLastDayInMonth() {
        let date = dayjs();
        if (date.date() < 14) {
            date = date.subtract(1, 'month');
        }
        return date.endOf('month');
    }
}

export type Task = {
    key: string;
    summary: string;
    hours: number;
}

export const MONTHS = [
    'Stycznia',
    'Lutego',
    'Marca',
    'Kwietnia',
    'Maja',
    'Czerwca',
    'Lipca',
    'Sierpnia',
    'Września',
    'Października',
    'Listopada',
    'Grudnia'
]
