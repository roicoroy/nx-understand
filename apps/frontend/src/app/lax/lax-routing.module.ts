import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaxPage } from './lax.page';

const routes: Routes = [
  {
    path: '',
    component: LaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaxPageRoutingModule {}
