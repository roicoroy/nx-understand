import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaxPageRoutingModule } from './lax-routing.module';

import { LaxPage } from './lax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaxPageRoutingModule
  ],
  declarations: [LaxPage]
})
export class LaxPageModule {}
