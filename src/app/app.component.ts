import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollPosition = window.scrollY;
    const maxScroll = 600; // Máxima distancia para reducir la opacidad

    // Calcula la opacidad según el scroll
    let opacity = 1 - scrollPosition / maxScroll;
    if (opacity < 0) {
      opacity = 0;
    }

    // Ajusta la opacidad de la imagen de fondo
    const backgroundElement = document.getElementById('background');
    if (backgroundElement) {
      backgroundElement.style.opacity = opacity.toString();
    }
  }
}
