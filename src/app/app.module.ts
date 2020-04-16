import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { FormsModule } from '@angular/forms';
import { HiComponent } from './components/hi/hi.component';
import { DataService } from './service/data.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
