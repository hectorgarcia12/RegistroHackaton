/* Modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './services/service.module';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';

/* Rutas */
import { APP_ROUTES } from './app.routes';

/* Componentes */
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    SharedModule,
    ServiceModule,
    ArchwizardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
