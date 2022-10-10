import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarathonComponent } from './components/marathon/marathon.component';
import { MarathonResolver } from './components/marathon/marathon.resolver';

const routes: Routes = [
  {
    path: 'marathon/:id',
    component: MarathonComponent,
    resolve: {
      marathon: MarathonResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
