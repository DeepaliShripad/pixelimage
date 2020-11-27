import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./features/main-panel/main-panel.module').then((m) => m.MainPanelModule),
  },
  {
    path: 'album',
    loadChildren: () =>
      import('./features/album/album.module').then((m) => m.AlbumModule),
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./features/photos/photos.module').then((m) => m.PhotosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
