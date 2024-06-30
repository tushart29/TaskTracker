import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  // typescript 
  title: string = 'TaskTracker';

  // inside will be intilized when component gets intilized 
  constructor() {

  }

  // you want to run something when a component loads
  ngOnInit(): void {

  }

  toggleAddTask() {
    console.log('toggle')
  }

}
