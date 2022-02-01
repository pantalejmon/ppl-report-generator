export const HOURS = 'Hours';
export const KEY = 'Issue Key';
export const SUMMARY = 'Issue summary';
export const DATE = 'Work date';
export const NAME = 'Full name';


export class Report {
    name: string = '';
    date: string = ''
    period: string;
    tasks: Task[] = [];

    constructor(value: Object = {}) {
        Object.assign(this, value);
    }

    prepareDate(): void {
        const currentDate = new Date();
        const day = `${currentDate.getDay()}`.padStart(2, '0')
        const month = `${currentDate.getMonth() + 1}`.padStart(2, '0')

        this.date = `${day}.${month}.${currentDate.getFullYear()}`;
    }

    sumHours(): number {
        return this.tasks
            .map(task => task.hours)
            .reduce((a, b) => a + b, 0);
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