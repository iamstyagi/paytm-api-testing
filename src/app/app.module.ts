import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './content/header/header.component';
import { HomelayoutComponent } from './pages/homelayout/homelayout.component';
import { IntegratedDataComponent } from './pages/integrated-data/integrated-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomelayoutComponent,
    IntegratedDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
