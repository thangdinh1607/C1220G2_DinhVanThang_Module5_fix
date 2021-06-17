import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingBarComponentComponent } from './rating-bar-component/rating-bar-component.component';
import { CountdownAppComponent } from './countdown-app/countdown-app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponentComponent,
    CountdownAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
