import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AlbumRoutingModule,
    RouterModule
  ]
})
export class AlbumModule { }
