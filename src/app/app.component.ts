import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mgui';
   isScreenLarge = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isScreenLarge = event.target.innerWidth > 768;
  }

}
