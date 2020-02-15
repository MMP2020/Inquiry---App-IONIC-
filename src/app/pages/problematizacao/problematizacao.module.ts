import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProblematizacaoPage } from './problematizacao.page';

const routes: Routes = [
  {
    path: '',
    component: ProblematizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProblematizacaoPage]
})
export class ProblematizacaoPageModule {}
