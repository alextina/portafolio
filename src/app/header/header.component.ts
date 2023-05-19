import { Component } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private sharedSvc: SharedServicesService,
  ) { }

  showNav: boolean = false;

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
