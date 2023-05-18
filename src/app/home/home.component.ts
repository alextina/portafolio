import { Component } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    public sharedSvc: SharedServicesService,
  ) { }

}
