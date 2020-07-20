import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {TableModule} from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from "primeng/dropdown";
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookDataComponent } from './book-data/book-data.component';
import { HelpComponent } from './help/help.component';
import { TermsComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDataComponent,
    HelpComponent,
    TermsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    TableModule,
    TabViewModule,
    TabMenuModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
