import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingController} from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-orientacao',
  templateUrl: './orientacao.page.html',
  styleUrls: ['./orientacao.page.scss'],
})
export class OrientacaoPage implements OnInit {

  public orientacoes: Array<Object> = [{
    t1: "",
    t2: "",
    t3: "",
    texto1: "",
    texto2: "",
    texto3: "",
    texto4: "",
    texto5: "",
    texto6:"",
  }];
  private loading: any;
  
  @Input() id: any;

  constructor(private firebase: FirebaseService, public modal: ModalController, private loadingCtrl: LoadingController) {
    
  }
  
  ngOnInit() {
    this.carregarOrientacoes();
  }

  async carregarOrientacoes(){
    await this.presentLoading();
    const results = this.firebase.db().collection('orientacoes')
                                      .where('nome','==',''+this.id)
                                      .onSnapshot(results => {
     this.orientacoes = [];  
     results.docs.forEach(doc => {
         this.orientacoes.push({id: doc.id, ...doc.data()});
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
