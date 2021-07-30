export class Report {
  name: string = '';
  date: string = '';
  from: string = '';
  to: string = '';
  tasks: Task[] = [];

  constructor(value: Object = {}) {
    Object.assign(this, value);
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
