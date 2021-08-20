import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi Aman hello-world';

  onFavoritChanged(eventArgs: any)
  {
    console.log("Favorite Changed");
    
  }
}
