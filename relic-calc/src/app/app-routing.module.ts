import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RelicLinkComponent } from './relic-link/relic-link.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'link/:code', component: RelicLinkComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
