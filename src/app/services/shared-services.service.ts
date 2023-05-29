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
  // Variable para controlar el estado del modo oscuro
  private darkModeSubject = new BehaviorSubject<boolean>(true);

  // para ocultar header y footer
  showHeader$ = this.showHeaderSubject.asObservable();
  showFooter$ = this.showFooterSubject.asObservable();
  // Observable para escuchar cambios en el modo oscuro
  darkMode$ = this.darkModeSubject.asObservable()

  private readonly darkModeLocalStorageKey = 'darkMode';

  constructor(private router: Router) {
    const storedDarkMode = localStorage.getItem(this.darkModeLocalStorageKey);
    if (storedDarkMode !== null) {
      this.darkModeSubject.next(storedDarkMode === 'true');
    } else {
      // Obtener la configuración del color del sistema al cargar la página
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.updateDarkMode(prefersDarkMode);
    }

    // Escuchar los cambios en la configuración del color del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.updateDarkMode(event.matches);
    });
  }

  // para ocultar header y footer
  updateShowHeader(showHeader: boolean): void {
    this.showHeaderSubject.next(showHeader);
  }

  updateShowFooter(showFooter: boolean): void {
    this.showFooterSubject.next(showFooter);
  }

  // cambios en el modo oscuro
  updateDarkMode(darkMode: boolean): void {
    this.darkModeSubject.next(darkMode);
    localStorage.setItem(this.darkModeLocalStorageKey, darkMode.toString());
  }

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