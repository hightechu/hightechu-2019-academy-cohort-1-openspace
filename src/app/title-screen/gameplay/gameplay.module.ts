import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameplayPageRoutingModule } from './gameplay-routing.module';

import { GameplayPage } from './gameplay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameplayPageRoutingModule
  ],
  declarations: [GameplayPage]
})
export class GameplayPageModule {}
