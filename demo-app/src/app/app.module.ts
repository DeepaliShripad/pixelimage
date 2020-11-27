import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelModule } from './features/main-panel/main-panel.module';
import { RouterModule } from '@angular/router';
import { AlbumModule } from './features/album/album.module';
import { PhotosModule } from './features/photos/photos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPanelModule,
    AlbumModule,
    PhotosModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
