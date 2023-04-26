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

const routes: Routes = [
  { path: "",redirectTo:'/inicio', pathMatch: 'full'},
  { path:'inicio',component:NavbarComponent},
  { path: 'login', component:LoginfondoComponent}, 
  { path: 'registro', component:RegistroFondoComponent},
  { path: 'edicion-de-usuario',component:EdicionDeUsuarioComponent},

  //Chequear si acepta la ruta
  {path: 'banner/editar/:id', component:EditarbannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
