import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-nous-joindre-form',
  templateUrl: './nous-joindre-form.component.html',
  styles: [
  ]
})
export class NousJoindreFormComponent implements OnInit {
  @Input() msg: Message;
  isSuccess: boolean;
  showAlert: boolean;
  alertMessage: string;

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit(): void {
    if (this.msg.id) {
      this.messageService.updateMessage(this.msg).subscribe(
        () => {
          this.isSuccess = true;
          this.alertMessage = 'Le formulaire a été soumis avec succès!';
          this.showAlert = true;
          this.router.navigate(['nous-joindre']);
        },
        (error) => {
          this.isSuccess = false;
          this.alertMessage = 'Une erreur s\'est produite lors de la soumission du formulaire.';
          this.showAlert = true;
          console.error(error);
        }
      );
    } else {
      this.messageService.createMessage(this.msg).subscribe(
        () => {
          this.isSuccess = true;
          this.alertMessage = 'Le formulaire a été soumis avec succès!';
          this.showAlert = true;
          this.router.navigate(['nous-joindre']);
        },
        (error) => {
          this.isSuccess = false;
          this.alertMessage = 'Une erreur s\'est produite lors de la soumission du formulaire.';
          this.showAlert = true;
          console.error(error);
        }
      );
    }
  }

}
