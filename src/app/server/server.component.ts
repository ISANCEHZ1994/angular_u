// This is to let Angular know that this file is a Component
// adding this CLASS DECORATOR which allows you to enhance your classes 
import { Component } from '@angular/core';

// We are passing a JavaScript oject thru the Component Decorator to configure it
@Component({ // Decorators are always attached by adding an @ symbol infront of them

    // will represent the "html" tag for this whole component which you can then add to app component.html
    selector: 'app-server', // must be a string and can be any unique name that you want - dont overwrite default HTML elements

    // below should point to this component's HTML file so that something can be displayed
    templateUrl: './server.component.html',   
    
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent {

    // hardcoding for now
    serverId: number = 10;
    // below we want to change the background color depending on service status 
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    };

    getServerStatus(){
        return this.serverStatus;
    };

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    };

};