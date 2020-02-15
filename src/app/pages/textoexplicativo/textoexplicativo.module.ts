import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TextoexplicativoPage } from './textoexplicativo.page';

const routes: Routes = [
  {
    path: '',
    component: TextoexplicativoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TextoexplicativoPage]
})
export class TextoexplicativoPageModule {}
