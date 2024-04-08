import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: [
  ]
})
export class MessageComponent implements OnInit {

  messageList: Message[];

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.messageService.getAllMessages().subscribe(
      (messageList) => this.messageList = messageList
    );
  }

  goBack(): void {
    this.router.navigate(['admin/message']);
  }

  goToDetail(id: number): void {
    this.router.navigate(['admin/message/detail', id])
  }

  goToEditMessage(id: number): void {
    this.router.navigate(['admin/message/edit', id])
  }

  goToDeleteMessage(messageId: number) {
    this.messageService.deleteMessage(messageId)
      .subscribe((response) => this.goBack())
  }

}
