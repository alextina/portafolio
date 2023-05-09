import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(
    private router: Router,

  ) { }

  goToHome(): void {
    this.router.navigate([''])
  }

  goToAboutMe(): void {
    this.router.navigate(['about-me'])
  }

  goToPortfolio(): void {
    this.router.navigate(['portfolio'])
  }

  goToContactMe(): void {
    this.router.navigate(['contact-me'])
  }

}