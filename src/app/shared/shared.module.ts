/* Modulos */
import { NgModule } from '@angular/core';

/* Componentes */
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        NopagefoundComponent
    ],
    exports: [
        NopagefoundComponent
    ]
})

export class SharedModule {}
