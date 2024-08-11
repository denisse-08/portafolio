import { Routes } from '@angular/router';
import { InicioComponent } from './portafolio/inicio/inicio.component';
import { ProyectosComponent } from './portafolio/proyectos/proyectos.component';
import { SobreMiComponent } from './portafolio/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './portafolio/contacto/contacto.component';


export const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'proyectos',
    component:ProyectosComponent
  },
  {
    path:'sobreMi',
    component:SobreMiComponent
  },{
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'',
    component:InicioComponent
  },

];
