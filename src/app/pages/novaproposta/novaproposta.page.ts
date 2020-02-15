import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { OrientacaoPage } from '../orientacao/orientacao.page';
import { TextosPage } from '../textos/textos.page';
import { YoutubePage } from '../youtube/youtube.page';
@Component({
  selector: 'app-novaproposta',
  templateUrl: './novaproposta.page.html',
  styleUrls: ['./novaproposta.page.scss'],
})
export class NovapropostaPage implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }
  async mostrarOrientacao(id='visoes'){
    const pagina = await this.modal.create({
      component: OrientacaoPage,
      componentProps: {id:id},
    });
    await pagina.present();

    const{ data } = await pagina.onDidDismiss();
 }
 async mostrarTextos(id='visoes'){
  const pagina = await this.modal.create({
    component: TextosPage,
    componentProps: {id:id},
  });
  await pagina.present();

  const{ data } = await pagina.onDidDismiss();
}
async mostrarYoutube(id='videosvisoes'){
  const pagina = await this.modal.create({
    component: YoutubePage,
    componentProps: {id:id},
  });
  await pagina.present();

  const{ data } = await pagina.onDidDismiss();
}
}
