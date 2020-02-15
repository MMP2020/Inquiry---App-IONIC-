import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoadingController} from '@ionic/angular';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
@Component({
  selector: 'app-texto',
  templateUrl: './texto.page.html',
  styleUrls: ['./texto.page.scss'],
})
export class TextoPage implements OnInit {

  public texto: Array<Object> = [{
    nome:"",
    resumo:"",
    link:"",
    autores:'',
    referencia:'',
  }];
  @Input() id: any;
  private loading: any;

  constructor(private firebase: FirebaseService, public modal: ModalController, private loadingCtrl: LoadingController,private browserTab: BrowserTab) { 
 
  }

  ngOnInit() {
    this.carregartexto();
  }

  abrir(link:string){
  this.browserTab.isAvailable()
  .then(isAvailable => {
    if (isAvailable) {
      this.browserTab.openUrl(link);
    } else {
      // open URL with InAppBrowser instead or SafariViewController
    }
  });
  }
  async carregartexto(){
    await this.presentLoading();
    const results = this.firebase.db().collection('texto')
                                      .where('nome','==',''+this.id)
                                      .onSnapshot(results => {
     this.texto = [];  
     results.docs.forEach(doc => {
         this.texto.push({id: doc.id, ...doc.data()});
      });
      this.loading.dismiss();
    });
   }

   async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: '' });
    return this.loading.present();
  }

   close(){
    this.modal.dismiss({});
  }

}
