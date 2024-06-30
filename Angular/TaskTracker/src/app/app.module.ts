import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';


// ng module is bought from angular code
@NgModule({
  // when we create a component , it is put in declarations
  // when we use cli to generate component, it is provide here 
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // global services
  providers: [],

  // root app component is getting boostrapped 
  bootstrap: [AppComponent]
})
export class AppModule { }
