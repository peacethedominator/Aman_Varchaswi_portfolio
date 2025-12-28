import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experienceYears: number = 0;
  experienceMonths: number = 0;

  ngOnInit(): void {
    this.calculateExperience();
  }

  private calculateExperience(): void {
    const startDate = new Date(2023, 6, 19); // July 19, 2023
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    // Adjust if current month is before start month
    if (months < 0) {
      years--;
      months += 12;
    }

    this.experienceYears = years;
    this.experienceMonths = months;
  }
}
