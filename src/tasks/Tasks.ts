import { Task, Loop, Week, Time } from '@nichengkai/express/typescript';

@Task
export class Tasks {
  @Loop('10s')
  loop() {
    console.log('This is a loop task!');
  }

  @Week('1')
  @Time('9:00')
  scheduled() {
    console.log('This is a scheduled task!');
  }
}
