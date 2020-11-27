import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoKeeperService } from './services/photo-keeper.service';

export interface Users {
  id: number;
  name: string;
  username:string;
  email:string;
  address:Address;
}

export interface Address{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  userList : Users[] = [];
  constructor(private apiService: PhotoKeeperService, private router : Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.apiService.getUserList().subscribe(
      (response: Users[]) => {
        this.userList = response;
      });
  }
  onClickUser(obj){
    console.log(obj.id);
    this.apiService.setUserId(obj.id);
    this.apiService.setUserId(obj.id)

    this.router.navigate(['/album']);
  }

}
