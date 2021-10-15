// APP.MODULE is basically where we tell Angular which pieces belong to our app 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// below is not an Angular feature but a TypeScript feature!
// TypeScript needs to know where things are
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, // we then add the new Module
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // we are referencing our AppComponent
  // this lists all the components which should be known to Angular at the point
  // of time it analyzes our index.html
})
export class AppModule { }

// Angular gets started in the MAIN.TS file then moves towards APP.MODULE.TS/ the app component
// Angular will now analyes the app component and reads everything that is a part of its file
