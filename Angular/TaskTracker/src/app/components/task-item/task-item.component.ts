import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Tasks'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = {
    id: 0,
    text: '1',
    day: '1',
    reminder: true
  };
  faTimes = faTimes

  constructor() {

  }
  ngOnInit(): void {

  }
}
