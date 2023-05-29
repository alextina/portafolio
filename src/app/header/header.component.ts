import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkMode: boolean = false;
  showNav: boolean = false;

  constructor(private sharedSvc: SharedServicesService) { }

  ngOnInit(): void {
    this.sharedSvc.darkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;
    })
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.sharedSvc.updateDarkMode(this.isDarkMode)
  }

  goHome(): void {
    this.sharedSvc.goToHome();
    this.showNav = false;
  }

  goProjects(): void {
    this.sharedSvc.goToProjects();
    this.showNav = false;
  }

  goContact(): void {
    this.sharedSvc.goToContact();
    this.showNav = false;
  }

}
