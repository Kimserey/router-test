import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello';
import { WorldComponent } from './world';

const appRoutes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    data: [{
      crumb: 'hello-crumb'
    }],
    children: [{
      path: 'world',
      component: WorldComponent,
      data: [{
        crumb: 'world-crumb'
      }]
    }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
