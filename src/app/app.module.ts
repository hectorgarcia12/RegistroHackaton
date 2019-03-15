/* Modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Rutas */
import { APP_ROUTES } from './app.routes';

/* Componentes */
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    RegistrosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
