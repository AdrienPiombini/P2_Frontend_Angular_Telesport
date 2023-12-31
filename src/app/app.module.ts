import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';
import { DetailsOlympicComponent } from './pages/details-olympic/details-olympic.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsOlympicComponentComponent } from './components/details-olympic-component/details-olympic-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, DetailsOlympicComponent, HeaderComponent, DetailsOlympicComponentComponent, HomeComponentComponent,],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxChartsModule, BrowserAnimationsModule, NgChartsModule],
  bootstrap: [AppComponent],
})


export class AppModule {

}
