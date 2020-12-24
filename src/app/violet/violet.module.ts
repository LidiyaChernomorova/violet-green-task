import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VioletRoutingModule } from './violet-routing.module';
import { MainService } from '../main.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, VioletRoutingModule],
  providers: [
    MainService,
    { provide: 'MainServiceColor', useValue: 'violet' },
  ],
})
export class VioletModule {}
