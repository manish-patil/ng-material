import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchConfigDialogComponent } from './search-config-dialog/search-config-dialog.component';

@NgModule({
  entryComponents: [
    SearchConfigDialogComponent
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    SearchConfigDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
