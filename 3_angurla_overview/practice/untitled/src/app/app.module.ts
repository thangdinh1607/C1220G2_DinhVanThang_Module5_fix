import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';
import { PetComponent } from './pet/pet.component';
import { UsingBoostrapComponent } from './using-boostrap/using-boostrap.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    UsingBoostrapComponent,
    SimpleCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
