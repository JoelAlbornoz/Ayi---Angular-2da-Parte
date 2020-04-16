import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorComponent } from './components/containers/contenedor/contenedor.component';
import { PuntoComponent } from './components/views/punto/punto.component';
import { LayoutComponent } from './components/containers/layout/layout.component';
import { ScontenedorComponent } from './components/containers/scontenedor/scontenedor.component';
import { LayoutpipeComponent } from './components/containers/layoutpipe/layoutpipe.component';
import { PipeJuevesComponent } from './components/views/pipe-jueves/pipe-jueves.component';


@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    PuntoComponent,
    LayoutComponent,
    ScontenedorComponent,
    LayoutpipeComponent,
    PipeJuevesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
