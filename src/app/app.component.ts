import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aman_Varchaswi_portfolio';
  toggleMenu(): void {
    // Select the menu and icon elements using the document query
    const menu = document.querySelector('.menu-links') as HTMLElement;
    const icon = document.querySelector('.hamburger-icon') as HTMLElement;

    // Check if both elements are found before toggling classes
    if (menu && icon) {
      menu.classList.toggle('open');
      icon.classList.toggle('open');
    }
  }
}
