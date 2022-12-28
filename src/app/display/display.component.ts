import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  userList:any
  add:any

  constructor(private api:ApiService){}

  ngOnInit() {
    this.api.getUsers().subscribe((data:any)=>{
     this.userList=data.users
     console.log(this.userList);
    })

  }

}
