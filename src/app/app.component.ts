import { Component, OnInit } from '@angular/core';
import { ChatService } from './shared/service/chat.service';
import { HttpClient } from '@angular/common/http';
import Conversations from 'assets/conversations.json';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agular-chat-aplication';
  conversations: any;

  constructor( ) {
  }

  ngOnInit() {
  }

  
  //loadData() {
  //  this.chatService.getUsers().subscribe(data => {
    //  debugger;
 
    //  console.log(data);
   // }, error => {
    //  console.log('Error while get chating users !');
    //});
 // }

}


 
