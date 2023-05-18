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
    this.router.navigate(['/']);
    window.scrollTo(0, 0);
  }

  goToProjects(): void {
    this.router.navigate(['projects']);
    window.scrollTo(0, 0);
  }

  goToContact(): void {
    this.router.navigate(['contact']);
    window.scrollTo(0, 0);
  }

}