import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

defineLocale('en-gb', enGbLocale); // Define locale for datepicker

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(), // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
