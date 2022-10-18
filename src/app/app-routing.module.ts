import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarathonsPage } from './components/marathons/marathons.page';

const routes: Routes = [
  {
    path: 'marathons',
    component: MarathonsPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
