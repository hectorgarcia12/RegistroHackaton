/* Modulos */
import { NgModule } from '@angular/core';

/* Componentes */
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NopagefoundComponent,
        FooterComponent
    ],
    exports: [
        NopagefoundComponent,
        FooterComponent
    ]
})

export class SharedModule {}
