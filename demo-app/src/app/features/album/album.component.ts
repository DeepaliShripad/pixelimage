import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PhotoKeeperService } from '../main-panel/services/photo-keeper.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumList = [];
  userId:any;
  subscription: Subscription;
  selectedAlbumArray = [];
  constructor(private apiService: PhotoKeeperService, private router : Router, private _Activatedroute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.apiService.userId.subscribe((message) => {
      this.userId = message
      this.getAlbumList(this.userId);
    })
  }

  getAlbumList(uId)
  {
    this.albumList=[];
    this.apiService.getAlbumList().subscribe(
      (response: any) => {
        // console.log('Response length-->'+response.length);
        // console.log('--'+uId);
        this.albumList = response;
        this.albumList = this.albumList.filter(function (e) {
          return e.userId === uId;
      });
      // console.log('---'+this.albumList.length)
    });
  }
  onClickAlbum(id){
    console.log('---'+this.selectedAlbumArray.includes(id));
    if(this.selectedAlbumArray.length<=1){
    if(!this.selectedAlbumArray.includes(id)){
      this.selectedAlbumArray.push(id);
    }
  }
    console.log('selected'+this.selectedAlbumArray);
  }

  onClickViewPhotos(){
    this.apiService.setSelectedAlbumList(this.selectedAlbumArray);
    this.router.navigate(['/photos']);

  }

}
