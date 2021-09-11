import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { Busqueda } from './components/busqueda/busqueda.component';
import { NavBar } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { CardMovie } from './components/cardmovie/cardmovie.component';

import { NgCircleProgressModule } from 'ng-circle-progress';


const CircleProgress = NgCircleProgressModule.forRoot({
  "unitsFontWeight": "700",
  "titleFontWeight": "700",
  "backgroundColor": "#ff9900",
  "backgroundStroke": "#ffffff",
  "backgroundStrokeWidth": 0,
  "backgroundPadding": 5,
  "radius": 15,
  "space": 50,
  "maxPercent": 100,
  "unitsFontSize": "10",
  "unitsColor": "#000000",
  "outerStrokeWidth": 3,
  "outerStrokeColor": "#FFFFFF",
  "outerStrokeGradientStopColor": "#ffffff",
  "innerStrokeColor": "#FFFFFF",
  "innerStrokeWidth": 50,
  "titleColor": "#000000",
  "titleFontSize": "15",
  "subtitleColor": "#483500",
  "animation": false,
  "animateTitle": false,
  "animationDuration": 0,
  "showSubtitle": false,
  "showInnerStroke": false,
  "startFromZero": false})

@NgModule({
  declarations: [
    AppComponent,
    Busqueda,
    NavBar,
    HomeComponent,
    MovieComponent,
    CardMovie
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CircleProgress
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
