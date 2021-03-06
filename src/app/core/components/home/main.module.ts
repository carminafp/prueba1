import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CentrosComponent } from './pages/centros/centros.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { NotificacionComponent } from './pages/notificaciones/notificacion/notificacion.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';



@NgModule({
  declarations: [
    HomeComponent,
    CentrosComponent,
    NotificacionesComponent,
    NotificacionComponent,
    AboutUsComponent,
    SolicitudComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
