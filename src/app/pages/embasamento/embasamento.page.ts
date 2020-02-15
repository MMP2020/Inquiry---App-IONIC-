import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { TextosPage } from '../textos/textos.page';

@Component({
  selector: 'app-embasamento',
  templateUrl: './embasamento.page.html',
  styleUrls: ['./embasamento.page.scss'],
})
export class EmbasamentoPage implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  async mostrarTextos(id:string){
    const pagina = await this.modal.create({
      component: TextosPage,
      componentProps: {id:id},
    });
    await pagina.present();
  
    const{ data } = await pagina.onDidDismiss();
  }

}
