import { Component, OnInit } from '@angular/core';

import { Task } from '../../Tasks'
import { TASKS } from '../../mock.tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

  // tasks from our fake backend js server
  constructor() {

  }
  ngOnInit(): void {

  }

}
