import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPanelRoutingModule } from './main-panel-routing.module';
import { MainPanelComponent } from './main-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainPanelComponent],
  imports: [
    CommonModule,
    MainPanelRoutingModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class MainPanelModule { }
