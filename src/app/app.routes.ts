/* Rutas */
import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { RegistrosComponent } from './pages/registros/registros.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

/* Establecemos las rutas de nuestra aplicación */
const appRoutes: Routes = [
    { path: 'registros', component: RegistrosComponent },
    { path: '', redirectTo: '/registros', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );
