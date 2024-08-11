import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { AppComponent } from '../../app.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactoComponent } from "../contacto/contacto.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, ProyectosComponent, SobreMiComponent, AppComponent, RouterOutlet, FooterComponent, ContactoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
