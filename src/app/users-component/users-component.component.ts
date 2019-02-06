import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared/service/chat.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.scss']
})
export class UsersComponentComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  usersData : User[]=[];
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.chatService.getUsers().subscribe(data => {
      this.usersData = data;
 
     console.log(data);
   }, error => {
      console.log('Error while get chat users !');
    });
  }

}
