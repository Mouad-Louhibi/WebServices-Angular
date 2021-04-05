import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ModelsComponent,
    ServicesComponent,
    AddTodoComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
