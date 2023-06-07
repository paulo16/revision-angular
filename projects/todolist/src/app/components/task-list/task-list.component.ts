import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  
  public newTask: string='';
  public tasks: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
