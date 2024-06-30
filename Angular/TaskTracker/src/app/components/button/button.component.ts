import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";

  @Output() btnClick = new EventEmitter()

  // inside will be intilized when component gets intilized 
  constructor() {

  }

  // you want to run something when a component loads
  ngOnInit(): void {

  }
  // here we listen it got clicked and tell another component that this button is clicked by using the output 
  onClick() {
    this.btnClick.emit()
  }

}


