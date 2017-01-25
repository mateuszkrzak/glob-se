import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FinderComponent } from './finder/finder.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: "about", component: AboutComponent},
  { path: "home", component: FinderComponent},
  { path: "**", component: FinderComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}




