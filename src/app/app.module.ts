import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObsComponent } from './obs/obs.component';
import { EventObsComponent } from './event-obs/event-obs.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsComponent,
    EventObsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
