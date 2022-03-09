import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}


@Component({
  selector: 'joke-list',
  template:`
  <div class="card card-block"
      *ngFor="let joke of jokes">
      <h4 class="card-title"></h4>
      <p class="card-text">{{ joke.setup }}</p>
  </div>
  `
})
export class JokeListComponent{
  jokes: Array<any>;

  constructor(){
    this.jokes = [
      {
        setup: "Hello2",
        punchline: "Hello-Me"
      },
      {
        setup: "Hello",
        punchline: "Hello-Me"
      }
    ];
  }
}