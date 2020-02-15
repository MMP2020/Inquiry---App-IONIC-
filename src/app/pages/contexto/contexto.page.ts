import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { OrientacaoPage } from '../orientacao/orientacao.page';
import { Market } from '@ionic-native/market/ngx';

@Component({
  selector: 'app-contexto',
  templateUrl: './contexto.page.html',
  styleUrls: ['./contexto.page.scss'],
})
export class ContextoPage implements OnInit {

  constructor(public modal: ModalController,private market: Market) { }

  ngOnInit() {
  }

abrir(){
  this.market.open('your.package.name');
}
  
  async mostrarOrientacao(id='contexto'){
    const pagina = await this.modal.create({
      component: OrientacaoPage,
      componentProps: {id:id},
    });
    await pagina.present();

    const{ data } = await pagina.onDidDismiss();
 }
}
