import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-nous-joindre',
  templateUrl: './nous-joindre.component.html',
  styleUrls: ['./nous-joindre.component.css']
})
export class NousJoindreComponent {

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
      .subscribe((msg) => this.router.navigate(['nous-joindre']))
  }

}
