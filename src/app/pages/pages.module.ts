/* Modulos */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ArchwizardModule } from 'angular-archwizard';

/* Componentes */
import { RegistrosComponent } from './registros/registros.component';
import { ParticipanteComponent } from './participante/participante.component';



@NgModule({
    declarations: [
        RegistrosComponent,
        ParticipanteComponent
    ],

    exports: [
        RegistrosComponent
    ],

    imports: [
        SharedModule,
        RouterModule,
        ArchwizardModule

    ]

})

export class PagesModule { }
