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

    prepareDates(): void {
        this.date = new Date().toLocaleDateString();
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