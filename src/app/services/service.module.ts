import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
        ParticipanteService,
        SharedService
      } from './service.index';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    ParticipanteService
  ],
  declarations: []

})
export class ServiceModule { }
