export const HOURS = 'Hours';
export const KEY = 'Issue Key';
export const SUMMARY = 'Issue summary';
export const DATE = 'Work date';
export const NAME = 'Full name';


export class Report {
    name: string = '';
    date: string = ''
    from: Date | string = ''
    to: Date | string = ''
    tasks: Task[] = [];

    constructor(value: Object = {}) {
        Object.assign(this, value);
    }

    prepareDates(): void {
        this.date = new Date().toLocaleDateString();
        this.from = (<Date>this.from).toLocaleDateString();
        this.to = (<Date>this.to).toLocaleDateString();
    }
}

export type Task = {
    key: string;
    summary: string;
    hours: number;
}