import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CollectionPageComponent} from './collection-page/collection-page.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { FigureDetailComponent } from './figure-detail/figure-detail.component';
import { YearPageComponent } from './year-page/year-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';



const routes: Routes = [{
  path: 'home',
  component: HomePageComponent,
},{
    path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path: 'collection',
    component: CollectionPageComponent,
  }, {
    path: 'watch',
    component: WatchListComponent,
  }, {
    path: 'figure',
    component: FigureDetailComponent,
  }, {
    path: 'year/:year',
    component: YearPageComponent,
  }, {
    path: 'detail/:id',
    component: DetailPageComponent,
  }, {
    path: 'weather',
    component: WeatherPageComponent,
  }, {
    path: '**', pathMatch: 'full',
    component: ErrorPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
