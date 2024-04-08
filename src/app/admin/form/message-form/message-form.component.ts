import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styles: [
  ]
})
export class MessageFormComponent implements OnInit {
  @Input() msg: Message;
  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.msg.id) {
      this.messageService.updateMessage(this.msg).subscribe(
        () => this.router.navigate(['admin/message'])
      );
    } else {
      this.messageService.createMessage(this.msg).subscribe(() => this.router.navigate(['admin/message']));
    }
  }
}
