import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from './services/shared-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'alextina';

  showHeader = true;
  showFooter = true;

  constructor(
    private sharedSvc: SharedServicesService,
  ) { }

  ngOnInit(): void {
    this.sharedSvc.showHeader$.subscribe(showHeader => {
      this.showHeader = showHeader;
    });

    this.sharedSvc.showFooter$.subscribe(showFooter => {
      this.showFooter = showFooter;
    })
  }

}
