import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Inicio del portfolio
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { AcercaDeMiComponent } from './Componentes/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { HabilidadeTecnicasComponent } from './Componentes/habilidade-tecnicas/habilidade-tecnicas.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';

//Login y registro con misma navbar
import { LoginformComponent } from './Componentes/Login/loginform/loginform.component';
import { LoginnavComponent } from './Componentes/Login/loginnav/loginnav.component';
import { RegistroNavComponent } from './Componentes/Registro/registro-nav/registro-nav.component';
import { RegistroFormComponent } from './Componentes/Registro/registro-form/registro-form.component';
import { LoginfondoComponent } from './Componentes/Login/loginfondo/loginfondo.component';
import { RegistroFondoComponent } from './Componentes/Registro/registro-fondo/registro-fondo.component';

//Edicion de usuario
import { EdicionDeUsuarioComponent } from './Componentes/edicion-de-usuario/edicion-de-usuario.component';
import { BannerEdicionComponent } from './Componentes/edicion-de-usuario/banner-edicion/banner-edicion.component';
import { NavEdicionComponent } from './Componentes/edicion-de-usuario/nav-edicion/nav-edicion.component';
import { ADeMiEdicionComponent } from './Componentes/edicion-de-usuario/a-de-mi-edicion/a-de-mi-edicion.component';
import { ExperienciaEdicionComponent } from './Componentes/edicion-de-usuario/experiencia-edicion/experiencia-edicion.component';
import { EducacionEdicionComponent } from './Componentes/edicion-de-usuario/educacion-edicion/educacion-edicion.component';
import { HabilidadesEdicionComponent } from './Componentes/edicion-de-usuario/habilidades-edicion/habilidades-edicion.component';
import { ProyectosEdicionComponent } from './Componentes/edicion-de-usuario/proyectos-edicion/proyectos-edicion.component';
import { FooterEdicionComponent } from './Componentes/edicion-de-usuario/footer-edicion/footer-edicion.component';

//mi_servicio
//import { MiServicioService } from './servicios/mi-servicio.service';

//Importamos nuestro HTTPClient
import{ HttpClientModule} from "@angular/common/http";

//Formulario Reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarbannerComponent } from './Componentes/edicion-de-usuario/banner-edicion/editarbanner/editarbanner.component';
import { EditarAcercaDeMiComponent } from './Componentes/edicion-de-usuario/a-de-mi-edicion/editar-acerca-de-mi/editar-acerca-de-mi.component';
import { EditarExperienciaComponent } from './Componentes/edicion-de-usuario/experiencia-edicion/editar-experiencia/editar-experiencia.component';
import { CrearExperienciaComponent } from './Componentes/edicion-de-usuario/experiencia-edicion/crear-experiencia/crear-experiencia.component';
import { EditarEducacionComponent } from './Componentes/edicion-de-usuario/educacion-edicion/editar-educacion/editar-educacion.component';
import { CrearEducacionComponent } from './Componentes/edicion-de-usuario/educacion-edicion/crear-educacion/crear-educacion.component';
import { EditarHabilidadesComponent } from './Componentes/edicion-de-usuario/habilidades-edicion/editar-habilidades/editar-habilidades.component';
import { CrearHabilidadesComponent } from './Componentes/edicion-de-usuario/habilidades-edicion/crear-habilidades/crear-habilidades.component';
import { EditarProyectosComponent } from './Componentes/edicion-de-usuario/proyectos-edicion/editar-proyectos/editar-proyectos.component';
import { CrearProyectosComponent } from './Componentes/edicion-de-usuario/proyectos-edicion/crear-proyectos/crear-proyectos.component';
import { EditarFooterComponent } from './Componentes/edicion-de-usuario/footer-edicion/editar-footer/editar-footer.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadeTecnicasComponent,
    ProyectosComponent,
    FooterComponent,
    LoginformComponent,
    LoginnavComponent,
    RegistroNavComponent,
    RegistroFormComponent,
    LoginfondoComponent,
    RegistroFondoComponent,
    EdicionDeUsuarioComponent,
    BannerEdicionComponent,
    NavEdicionComponent,
    ADeMiEdicionComponent,
    ExperienciaEdicionComponent,
    EducacionEdicionComponent,
    HabilidadesEdicionComponent,
    ProyectosEdicionComponent,
    FooterEdicionComponent,
    EditarbannerComponent,
    EditarAcercaDeMiComponent,
    EditarExperienciaComponent,
    CrearExperienciaComponent,
    EditarEducacionComponent,
    CrearEducacionComponent,
    EditarHabilidadesComponent,
    CrearHabilidadesComponent,
    EditarProyectosComponent,
    CrearProyectosComponent,
    EditarFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())   
  ],
  //Si lo creo de forma manual, no con  –module=app al crear el servicio,lo tengo que importar en el app.module.ts. providers. esta bien asi?
  providers: [], //MiServicioService estaba adentro de los corchetes de providers 
  bootstrap: [AppComponent]
})
export class AppModule { }
