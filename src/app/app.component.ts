import { Component } from '@angular/core';

@Component({
  template: `
    <a routerLink="/hello/world">GO</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
