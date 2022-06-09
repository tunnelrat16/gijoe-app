import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CollectionPageComponent} from './collection-page/collection-page.component';
import { WantListComponent } from './want-list/want-list.component';
import { FigureDetailComponent } from './figure-detail/figure-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [{
  path: "home",
  component: HomePageComponent,
},{
    path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path: "collection",
    component: CollectionPageComponent,
  }, {
    path: "want",
    component: WantListComponent,
  }, {
    path: "figure",
    component: FigureDetailComponent,
  }, {
    path: "error",
    component: ErrorPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
