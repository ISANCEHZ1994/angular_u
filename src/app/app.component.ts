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
      }
  
  `] 
})
export class AppComponent {
  // name = 'Israel';
}
