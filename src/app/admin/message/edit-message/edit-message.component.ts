import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styles: [
  ]
})
export class EditMessageComponent implements OnInit {

  msg: Message | undefined

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.messageService.getMessageById(id).subscribe(
        (message) => this.msg = message
      );
    }
  }

}
