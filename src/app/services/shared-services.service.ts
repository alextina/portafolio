import { Injectable, } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  // para ocultar header y footer
  private showHeaderSubject = new BehaviorSubject<boolean>(true);
  private showFooterSubject = new BehaviorSubject<boolean>(true);

  showHeader$ = this.showHeaderSubject.asObservable();
  showFooter$ = this.showFooterSubject.asObservable();

  updateShowHeader(showHeader: boolean): void {
    this.showHeaderSubject.next(showHeader);
  }

  updateShowFooter(showFooter: boolean): void {
    this.showFooterSubject.next(showFooter);
  }


  constructor(
    private router: Router,

  ) { }

  goToHome(): void {
    this.router.navigate(['']);
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