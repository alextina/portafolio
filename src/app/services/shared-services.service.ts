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

  goToProjects(): void {
    this.router.navigate(['projects'])
  }

  goToContact(): void {
    this.router.navigate(['contact'])
  }

}