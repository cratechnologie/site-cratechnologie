import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styles: [
  ]
})
export class AddMessageComponent implements OnInit {

  msg: Message

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.msg = new Message();
  }

  addMessage(msg: Message): void {
    this.messageService.createMessage(msg)
      .subscribe((msg) => this.router.navigate(['admin/message']))
  }

}
