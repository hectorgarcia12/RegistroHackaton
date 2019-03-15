/* Modulos */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/* Componentes */
import { RegistrosComponent } from './registros/registros.component';

@NgModule({
    declarations: [
        RegistrosComponent
    ],

    exports: [
        RegistrosComponent
    ],

    imports: [
        SharedModule
    ]

})

export class PagesModule { }
