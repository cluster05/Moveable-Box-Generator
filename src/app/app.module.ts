import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
