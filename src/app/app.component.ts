import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // like with template above - styleUrls OR style MUST be present
  // styleUrls: ['./app.component.css']
  // now with backticks - whichever works for you
  styles: [`
      h3{
        color: dodgerblue;
      };

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
    console.log('does this appear?');
    this.clicks.push(this.clicks.length + 1);
    this.showText = !this.showText;
    console.log(this.clicks);
  };

  afterFive(){
    // here I messed up - its telling it for every item inside of the array when it should be only after 4
    // replace the code inside of the app.html to fix so that only the first 4 are not blue
    // NOTE: this function is no longer needed
    this.afterFiveClicks = true;
    return this.clicks.length >= 5 ? 'blue' : 'transparent';
  };

}
