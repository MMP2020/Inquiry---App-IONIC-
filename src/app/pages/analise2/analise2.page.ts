import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { OrientacaoPage } from '../orientacao/orientacao.page';
import { Proposta } from 'src/app/interfaces/proposta';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-analise2',
  templateUrl: './analise2.page.html',
  styleUrls: ['./analise2.page.scss'],
})
export class Analise2Page implements OnInit {
  public proposta: Proposta = {};
  private loading: any;
  private id: any;
  
 
  constructor(private firebase: FirebaseService, public modal: ModalController, public modalTexto: ModalController,public FirebaseAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,) { }



  ngOnInit() {
    this.carregar();
  }
  async carregar(){
    await this.presentLoading();
    const uid = this.FirebaseAuth.auth.currentUser.uid;
    const results = this.firebase.db().collection('proposta')
                                      .where('uid','==',''+uid).where('ativo',"==","true")
                                      .onSnapshot(results => {
    this.proposta = {};  
    results.docs.forEach(doc => {
        this.id = doc.id;
        this.proposta= doc.data()});
      });

    this.loading.dismiss();
    }


  async update(){
      await this.firebase.db().collection("proposta").doc(this.id).update(this.proposta);
  }  

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, espere...' });
    return this.loading.present();
  }
  

  async mostrarOrientacao(id="analise2"){
    const pagina = await this.modal.create({
      component: OrientacaoPage,
      componentProps: {id:id},
    });
    await pagina.present();

    const{ data } = await pagina.onDidDismiss();
 }

}
