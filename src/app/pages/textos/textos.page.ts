import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoadingController} from '@ionic/angular';
import { TextoPage } from '../texto/texto.page';
@Component({
  selector: 'app-textos',
  templateUrl: './textos.page.html',
  styleUrls: ['./textos.page.scss'],
})
export class TextosPage implements OnInit {

  public listatexto: Array<Object>;
  @Input() id: any;
  private loading: any;

  constructor(private firebase: FirebaseService, 
              public modal: ModalController, 
              public modalTexto: ModalController, 
              private loadingCtrl: LoadingController) 
   {}

  ngOnInit() {
    this.carregarlistatexto();
  }

  async carregarlistatexto(){
    await this.presentLoading();
    const results = this.firebase.db().collection(''+this.id)
                                      .onSnapshot(results => {
     this.listatexto = [];  
     results.docs.forEach(doc => {
         this.listatexto.push({id: doc.id, ...doc.data()});
      });
      this.loading.dismiss();
    }); 
   }

   async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: '' });
    return this.loading.present();
  }

   async mostrarTexto(id){
    const pagina = await this.modalTexto.create({
      component: TextoPage,
      componentProps: {id:id},
    });
    await pagina.present();
  
    const{ data } = await pagina.onDidDismiss();
  }

   close(){
    this.modal.dismiss({});
  }

}
