import { Task, Loop, Week, Time } from '@nichengkai/express/typescript';

@Task
export class Tasks {
  @Loop('1s')
  loop() {
    console.log('This is a loop task!');
  }

  @Week('2')
  @Time('19:25')
  scheduled() {
    console.log('This is a scheduled task!');
  }
}
