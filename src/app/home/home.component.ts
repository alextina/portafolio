import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../services/shared-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public sharedSvc: SharedServicesService,
  ) { }

  jobTittles: string[] = ['FrontEnd Web Developer', 'Egresada de Laboratoria', /*'Mamá de Bianka 🐶, Tsukimi 🐱 y Yami 🐱', 'Tejedora a crochet', 'Amante del cine'*/]
  currentJobIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentJobIndex = (this.currentJobIndex + 1) % this.jobTittles.length;
    }, 4000)
  }

  openCv(url: string) {
    window.open(url, '_blank')
  }

}
