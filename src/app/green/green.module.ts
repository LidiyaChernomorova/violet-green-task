import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenRoutingModule } from './green-routing.module'
import { MainService } from '../main.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GreenRoutingModule,
  ],
  providers: [
    MainService,
    { provide: 'MainServiceColor', useValue: 'green' },
  ],
})
export class GreenModule { }
