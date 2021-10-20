import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // like with template above - styleUrls OR style MUST be present
  // styleUrls: ['./app.component.css']
  // now with backticks - whichever works for you
  styles: [`

      .online{
        color: white;
      };
  `] 
})
export class AppComponent {
  // name = 'Israel';

  showText = false;
  clicks = [];
  afterFiveClicks = false;

  onShow(){
    this.clicks.push(this.clicks.length + 1);
    this.showText = !this.showText;
    console.log(this.clicks);
  };

  afterFive(){
    // here is my inital solution to the problem 
    // I messed up - its telling it for every item INSIDE of the array when it should be only after 4
    // inline coded inside of the app.html to fix it so that only the first 4 are not blue but 5 and up are 
    // NOTE: this function is no longer needed
    this.afterFiveClicks = true;
    return this.clicks.length >= 5 ? 'blue' : 'transparent';
  };

}
