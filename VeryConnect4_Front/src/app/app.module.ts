// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MessageComponent } from './components/message/message.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FriendlyDatePipe } from './pipes/friendly-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    NavMenuComponent,
    MessageComponent,
    SortByPipe,
    FriendlyDatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
