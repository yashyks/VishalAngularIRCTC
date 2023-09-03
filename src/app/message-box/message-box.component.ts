import { Component, SimpleChanges } from '@angular/core';
import {MessageServiceService} from '../message-service.service';
import { DataShareService } from '../data-share.service';

interface messageBody {
  id: number;
  text: string;
  origin: string;
}

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})

export class MessageBoxComponent {
  message: string = '';
  messages: messageBody[]=[]; 
  responseOnServer: string= '';
  display: boolean = true;

constructor(private msg: MessageServiceService,
private dataService: DataShareService,){}

  sendMessage() {
    this.messages.push({
      id: this.messages.length+1,
      text: this.message,
      origin: 'me'
   })
   this.display = false;
   this.dataService.setOption('Display', this.display);
  this.msg.postData({ message: this.message }).subscribe(response => {
    console.log('Response from backend:', response.answer.content);
  this.responseOnServer=response.answer.content});
    console.log('Message:', this.message);
    this.message = "";
    this.messages.push({
      id: this.messages.length+1,
      text: this.responseOnServer,
      origin: 'Server'
   })   
  }

  onInputChange(event: any){
    console.log(event.target.value);
  }
  ngOnChanges() {
    console.log(this.message)
  }

}
