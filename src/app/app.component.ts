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

  isDarkMode: boolean = false;

  constructor(private sharedSvc: SharedServicesService) { }

  ngOnInit(): void {
    this.sharedSvc.showHeader$.subscribe(showHeader => {
      this.showHeader = showHeader;
    });

    this.sharedSvc.showFooter$.subscribe(showFooter => {
      this.showFooter = showFooter;
    })

    this.sharedSvc.darkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
      this.updateBodyClass();
    })
  }

  updateBodyClass(): void {
    const body = document.getElementById('body');
    if (this.isDarkMode) {
      body?.classList.remove('light-mode');
      body?.classList.add('dark-mode');
    } else {
      body?.classList.remove('dark-mode');
      body?.classList.add('light-mode');
    }
  }

}
