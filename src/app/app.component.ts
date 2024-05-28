import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tutorial';
  showBolachka: boolean = false;
  showKaries = false;
  activeParts: { [key: string]: { [key: string]: boolean } } = {};

  ngOnInit() {
    // Initialize the activeParts object for each tooth
    for (let i = 1; i <= 32; i++) {
      this.activeParts[`tooth${i}`] = {
        left: false,
        right: false,
        center: false,
        top: false,
        bottom: false,
      };
    }
  }

  togglePart(toothNumber: string, part: string) {
    this.activeParts[toothNumber][part] = !this.activeParts[toothNumber][part];
  }
}
