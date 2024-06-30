import { Component } from '@angular/core';

// component declaration 
// 3 items
// 1. selector: html tag to embed in the component
// 2. where html file is located
// 3. where css is located 


// root component is embeded in index.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// where you put any properites you put here and any methods which can be executed in html 
export class AppComponent {

}
