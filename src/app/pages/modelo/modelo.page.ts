import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { OrientacaoPage } from '../orientacao/orientacao.page';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.page.html',
  styleUrls: ['./modelo.page.scss'],
})
export class ModeloPage implements OnInit {

  constructor(public modal: ModalController,private browserTab: BrowserTab) { }

  ngOnInit() {
  }

  async mostrarOrientacao(id="modelo"){
    const pagina = await this.modal.create({
      component: OrientacaoPage,
      componentProps: {id:id},
    });
    await pagina.present();

    const{ data } = await pagina.onDidDismiss();
 }

 abrir(){
  this.browserTab.isAvailable()
  .then(isAvailable => {
    if (isAvailable) {
      this.browserTab.openUrl("https://firebasestorage.googleapis.com/v0/b/inquiry-14b61.appspot.com/o/mabi.jpg?alt=media&token=f7eca370-f7e8-49af-a2d2-7023dccaceb6");
    } else {
      // open URL with InAppBrowser instead or SafariViewController
    }
  });
  }


}
