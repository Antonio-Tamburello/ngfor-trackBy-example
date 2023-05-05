import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';

  fetchData = [{"title":"saurabh","description":"dd","tagline":"tt","date":"dd"},{"title":"aman","description":"dd","tagline":"tt","date":"dd"},{"title":"jessica","description":"dd","tagline":"tt","date":"dd"},{"title":"rosh","description":"dd","tagline":"tt","date":"dd"}];


}
