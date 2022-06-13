import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CollectionPageComponent} from './collection-page/collection-page.component';
import { WantListComponent } from './want-list/want-list.component';
import { FigureDetailComponent } from './figure-detail/figure-detail.component';
import { YearPageComponent } from './year-page/year-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';


const routes: Routes = [{
  path: 'home',
  component: HomePageComponent,
},{
    path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path: 'collection',
    component: CollectionPageComponent,
  }, {
    path: 'want',
    component: WantListComponent,
  }, {
    path: 'figure',
    component: FigureDetailComponent,
  }, {
    path: 'year',
    component: YearPageComponent,
  }, {
    path: 'error',
    component: ErrorPageComponent,
  }, {
    path: 'detail/:id',
    component: DetailPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
