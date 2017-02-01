import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ValuatorComponent } from './valuator/valuator.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'valuator', component: ValuatorComponent},
  { path: 'search', component: SearchResultComponent},
  { path: '**', component: ValuatorComponent}
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




