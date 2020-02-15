import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';


const routes: Routes = [
  { path: "", redirectTo: '/menu/introducao', pathMatch: 'full' },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'introducao',
        loadChildren: '../introducao/introducao.module#IntroducaoPageModule',
        pathMatch: 'full'
      },
      {
        path: 'dados',
        loadChildren: '../dados/dados.module#DadosPageModule',
        pathMatch: 'full'
      },
      {
        path: 'sobre',
        loadChildren: '../sobre/sobre.module#SobrePageModule',
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
