import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import {StorageService} from './services/storage.service'
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
