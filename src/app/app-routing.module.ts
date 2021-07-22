import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneautoComponent } from './oneauto/oneauto.component';
import { TwoautoComponent } from './twoauto/twoauto.component';

const routes: Routes = [
  {
    path: "twoauto",component: TwoautoComponent,
  },
  {
    path: "oneauto",component : OneautoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
