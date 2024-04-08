import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Site EBAX';

  constructor(private router: Router) { }

  // isInAdminSection(): boolean {
  //   if (this.router.url.indexOf('/admin') > -1) {
  //     return true
  //   }
  //   return false
  // }
}
