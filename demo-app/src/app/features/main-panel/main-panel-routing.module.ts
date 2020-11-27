import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './main-panel.component';


const routes: Routes = [
  {
    path: '',
    component: MainPanelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPanelRoutingModule { }
