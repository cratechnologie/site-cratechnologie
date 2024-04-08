import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styles: [
  ]
})
export class DetailMessageComponent implements OnInit {
  message: Message | undefined;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.messageService.getMessageById(id).subscribe(
        (message) => this.message = message
      )
    }
  }

  goBack(): void {
    this.router.navigate(['admin/message']);
  }

  goToEditMessage(id: number): void {
    this.router.navigate(['admin/message/edit', id])
  }

  goToDeleteMessage(messageId: number) {
    this.messageService.deleteMessage(messageId)
      .subscribe((response) => this.goBack())
  }
}
