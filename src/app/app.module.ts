import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { TwoautoComponent } from './twoauto/twoauto.component';
import { OneautoComponent } from './oneauto/oneauto.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoautoComponent,
    OneautoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularMultiSelectModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
