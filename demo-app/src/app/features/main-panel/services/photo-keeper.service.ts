import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhotoKeeperService {

  private userIdSource = new BehaviorSubject('');
  userId = this.userIdSource.asObservable();

  // private selectedAlbumSource = new BehaviorSubject([]);
  // selectedAlbumList = this.userIdSource.asObservable();
  selectedAlbumList=[];
  constructor(private http: HttpClient) { }
  
  setUserId(message: string) {
    this.userIdSource.next(message)
  }

  setSelectedAlbumList(data:any){
    console.log("data in service"+data);
    this.selectedAlbumList = data;
  }

  getSelectedAlbumList(){
    return this.selectedAlbumList;
  }

  
  getUserList(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(map(response => {
     return response;
    }));
  }
  getAlbumList(){
    return this.http.get('http://jsonplaceholder.typicode.com/albums')
    .pipe(map(response => {
     return response;
    }));
  }
  getPhotosList(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .pipe(map(response => {
     return response;
    }));
  }
}
