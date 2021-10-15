// APP.MODULE is basically where we tell Angular which pieces belong to our app 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// below is not an Angular feature but a TypeScript feature!
// TypeScript needs to know where things are
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    // FormsModule // we then add the new Module
  ],
  providers: [],
  bootstrap: [AppComponent] // we are referencing our AppComponent
  // this lists all the components which should be known to Angular at the point
  // of time it analyzes our index.html
})
export class AppModule { }

// Angular gets started in the MAIN.TS file then moves towards APP.MODULE.TS/ the app component
// Angular will now analyes the app component and reads everything that is a part of its file
