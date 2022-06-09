import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FigureListingComponent } from './figure-listing/figure-listing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WantListComponent } from './want-list/want-list.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FigureDetailComponent } from './figure-detail/figure-detail.component';
import { NavYearComponent } from './nav-year/nav-year.component';
import { YearPageComponent } from './year-page/year-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FigureListingComponent,
    HomePageComponent,
    NavBarComponent,
    WantListComponent,
    CollectionPageComponent,
    ErrorPageComponent,
    FigureDetailComponent,
    NavYearComponent,
    YearPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
