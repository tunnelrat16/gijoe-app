import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FigureListingComponent } from './figure-listing/figure-listing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FigureDetailComponent } from './figure-detail/figure-detail.component';
import { NavYearComponent } from './nav-year/nav-year.component';
import { YearPageComponent } from './year-page/year-page.component';
import { FigureListComponent } from './figure-list/figure-list.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ArraySortPipe } from './sort.pipe';
import { WeatherPageComponent } from './weather-page/weather-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FigureListingComponent,
    HomePageComponent,
    NavBarComponent,
    WatchListComponent,
    CollectionPageComponent,
    ErrorPageComponent,
    FigureDetailComponent,
    NavYearComponent,
    YearPageComponent,
    FigureListComponent,
    DetailPageComponent,
    UpdateFormComponent,
    ArraySortPipe,
    WeatherPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
