import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // the selector as an element atrribute
  // selector: '.app-servers', // the selector as a css class
  selector: 'app-servers',
  // Notice the backticks for the template below
  template: `       
  <app-server></app-server> 
  <app-server></app-server>`,
  // below is old one - templateUrl OR template either one HAS to be present! - will still look the same!
  // templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
