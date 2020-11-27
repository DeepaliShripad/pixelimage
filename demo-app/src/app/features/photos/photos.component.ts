import { Component, OnInit } from '@angular/core';
import { PhotoKeeperService } from '../main-panel/services/photo-keeper.service';

@Component({
selector: 'app-photos',
templateUrl: './photos.component.html',
styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  selectedArrayList:any;
  photosList=[];
  finalList = [];
  selectedArrayEle:number;
  startIndex = 0;


  currentItem: any;
  private pointer: number = 0;
  private interval;
  constructor(private apiService: PhotoKeeperService) { }
  dateObj = Date.now()
ngOnInit(): void {
  this.selectedArrayList =  this.apiService.getSelectedAlbumList();
  console.log("selected array list"+this.selectedArrayList);
  if(this.selectedArrayList.length>0){
    this.getPhotosList();
   
    }
  }

  getPhotosList()
  {
    this.photosList=[];
    this.apiService.getPhotosList().subscribe(
      (response: any) => {
        for(var i=0; i<this.selectedArrayList.length;i++){
          for(var j=0; j<response.length;j++){
            if(response[j].albumId === this.selectedArrayList[i])
            {
              this.photosList.push(response[j]);
            }
          }
        }
     this.demo();
    });
  }

  demo(){
    for(var i=0; i<this.selectedArrayList.length;i++){
      for(var j=0; j<this.photosList.length;j++){
        if(this.photosList[j].albumId === this.selectedArrayList[0])
        {
          this.finalList.push(this.photosList[j]);
        }
      }
      if(i === 1){
        this.pointer = i
        break;
      }
    }
      this.interval = setInterval(() => {
        this.currentItem = this.selectedArrayList[this.pointer];
          this.finalList = [];
          for(var j=0; j<this.photosList.length;j++){

            if(this.photosList[j].albumId === this.selectedArrayList[this.pointer])
            {
              this.finalList.push(this.photosList[j]);
            }
          }
          this.dateObj = Date.now()


        this.pointer++;
        if (this.pointer > this.selectedArrayList.length-1) { this.pointer = 0 };
      }, 20000);
  }
}
