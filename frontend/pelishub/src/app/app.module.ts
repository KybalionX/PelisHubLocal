import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Busqueda } from './components/busqueda/busqueda.component';
import { NavBar } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { CardMovie } from './components/cardmovie/cardmovie.component';
import { Proximos } from './components/proximos/proximos.component';
import { cardResultMovie } from './components/cardResultMovie/cardResultMovie.component';
import { Login } from './components/login/login.component';
import { Register } from './components/register/register.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UserService } from './services/other/user.service';

import { NgxPaginationModule } from 'ngx-pagination';

import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';


const CircleProgress = NgCircleProgressModule.forRoot({
  "unitsFontWeight": "700",
  "titleFontWeight": "700",
  "backgroundColor": "#ff9900",
  "backgroundStrokeWidth": 0,
  "backgroundPadding": 5,
  "radius": 15,
  "space": 50,
  "maxPercent": 100,
  "unitsFontSize": "10",
  "unitsColor": "#000000",
  "outerStrokeWidth": 3,
  "outerStrokeColor": "#FFF",
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
    CardMovie,
    Proximos,
    cardResultMovie,
    Login,
    Register,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CircleProgress,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
