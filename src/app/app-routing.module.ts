import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginfondoComponent } from './Componentes/Login/loginfondo/loginfondo.component';
/* import { LoginformComponent } from './Componentes/Login/loginform/loginform.component';*/
/* import { LoginnavComponent } from './Componentes/Login/loginnav/loginnav.component'; */
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { RegistroFondoComponent } from './Componentes/Registro/registro-fondo/registro-fondo.component';

//Cargamos los formularios
import { EdicionDeUsuarioComponent } from './Componentes/edicion-de-usuario/edicion-de-usuario.component';
import { BannerEdicionComponent } from './Componentes/edicion-de-usuario/banner-edicion/banner-edicion.component';
import { EditarbannerComponent } from './Componentes/edicion-de-usuario/banner-edicion/editarbanner/editarbanner.component';
import { EditarAcercaDeMiComponent } from './Componentes/edicion-de-usuario/a-de-mi-edicion/editar-acerca-de-mi/editar-acerca-de-mi.component';
import { EditarExperienciaComponent } from './Componentes/edicion-de-usuario/experiencia-edicion/editar-experiencia/editar-experiencia.component';
import { CrearExperienciaComponent } from './Componentes/edicion-de-usuario/experiencia-edicion/crear-experiencia/crear-experiencia.component';
import { CrearEducacionComponent } from './Componentes/edicion-de-usuario/educacion-edicion/crear-educacion/crear-educacion.component';
import { EditarEducacionComponent } from './Componentes/edicion-de-usuario/educacion-edicion/editar-educacion/editar-educacion.component';
import { CrearProyectosComponent } from './Componentes/edicion-de-usuario/proyectos-edicion/crear-proyectos/crear-proyectos.component';
import { EditarProyectosComponent } from './Componentes/edicion-de-usuario/proyectos-edicion/editar-proyectos/editar-proyectos.component';
import { EditarFooterComponent } from './Componentes/edicion-de-usuario/footer-edicion/editar-footer/editar-footer.component';
import { CrearHabilidadesComponent } from './Componentes/edicion-de-usuario/habilidades-edicion/crear-habilidades/crear-habilidades.component';
import { EditarHabilidadesComponent } from './Componentes/edicion-de-usuario/habilidades-edicion/editar-habilidades/editar-habilidades.component';

//Para protejer las rutas
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [
  { path: "", redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: NavbarComponent },
  { path: 'login', component: LoginfondoComponent },
  { path: 'registro', component: RegistroFondoComponent },
  { path: 'edicion-de-usuario', component: EdicionDeUsuarioComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },

  //Chequear si acepta la ruta
  { path: 'banner/editar/:id', component: EditarbannerComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'acercaDeMi/editar/:id', component: EditarAcercaDeMiComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'experiencia/new', component: CrearExperienciaComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'experiencia/editar/:id', component: EditarExperienciaComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'educacion/new', component: CrearEducacionComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'educacion/editar/:id', component: EditarEducacionComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'habilidades/new', component: CrearHabilidadesComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'habilidades/editar/:id', component: EditarHabilidadesComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'proyectos/new', component: CrearProyectosComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'proyectos/editar/:id', component: EditarProyectosComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) },
  { path: 'redes/editar/:id', component: EditarFooterComponent, ...canActivate(() => redirectUnauthorizedTo(['login'])) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
