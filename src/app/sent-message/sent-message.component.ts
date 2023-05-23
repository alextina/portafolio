import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-sent-message',
  templateUrl: './sent-message.component.html',
  styleUrls: ['./sent-message.component.css']
})
export class SentMessageComponent implements OnInit {

  showHeader = true;
  showFooter = true;
  counter: number = 5;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedSvc: SharedServicesService,
  ) { }

  ngOnInit(): void {
    this.sharedSvc.updateShowHeader(false);
    this.sharedSvc.updateShowFooter(false);

    const timer = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(timer);
        this.router.navigate(['/']);
        this.sharedSvc.updateShowHeader(true);
        this.sharedSvc.updateShowFooter(true);
      }
    }, 1000);
  }

}
