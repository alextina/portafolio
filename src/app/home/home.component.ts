import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  techList: string[] = [];

  constructor(
    public sharedSvc: SharedServicesService,
  ) { }

  ngOnInit() {
    this.techList = this.sharedSvc.getTechList();
  }

}