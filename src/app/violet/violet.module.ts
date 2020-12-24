import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VioletRoutingModule } from './violet-routing.module';
import { MainService } from '../main.service';
import { violetBlocksList } from './violetBlocksList.const'
@NgModule({
  declarations: [],
  imports: [CommonModule, VioletRoutingModule],
  providers: [
    MainService,
    { provide: 'MainServiceColor', useValue: 'violet' },
    { provide: 'MainServiceArray', useValue: violetBlocksList },
  ],
})
export class VioletModule {}
