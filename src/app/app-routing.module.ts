import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarathonComponent } from './components/marathons/components/marathon/marathon.component';
import { MarathonsPage } from './components/marathons/marathons.page';

const routes: Routes = [
  {
    path: 'marathons',
    component: MarathonsPage,
    children: [
      {
        path: ':id',
        component: MarathonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
