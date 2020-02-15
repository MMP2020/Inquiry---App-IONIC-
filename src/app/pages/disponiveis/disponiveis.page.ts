import { Component, OnInit } from '@angular/core';
import { Proposta } from 'src/app/interfaces/proposta';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import {ModalController} from '@ionic/angular';
import { PropostaPage } from '../proposta/proposta.page';


@Component({
  selector: 'app-disponiveis',
  templateUrl: './disponiveis.page.html',
  styleUrls: ['./disponiveis.page.scss'],
})
export class DisponiveisPage implements OnInit {

  public proposta: Proposta = {};
  public propostas: Array<Object>;
  private loading: any;
  public email: any;
  public cor: string = 'red';

  
  constructor(private firebase: FirebaseService, public FirebaseAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,public modal: ModalController, ) { }

  ngOnInit() {
    this.carregarProposta();
  }


  async carregarProposta() {
    await this.presentLoading();
    this.email = this.FirebaseAuth.auth.currentUser.email;
    const results = this.firebase.db().collection('proposta').where('compartilhar', '==', true).onSnapshot(results => {
      this.propostas = [];
      results.docs.forEach(doc => {
        this.propostas.push({ id: doc.id, ...doc.data() });
      });
      this.loading.dismiss();
    });
  }

  async visualizar(i:any,op="edit"){
    var proposta = this.propostas[i];
    const pagina = await this.modal.create({
      component: PropostaPage,
      componentProps: {op,proposta},
    });
    await pagina.present();
    const{ data } = await pagina.onDidDismiss();
   
   

    if(data.op =="excluir"){
      await this.firebase.db().collection('proposta').doc(this.propostas[i]["id"]).delete();
      this.carregarProposta();
      return;
    }else{
      this.proposta=data.proposta;
      this.update(this.propostas[i]["id"]);
      this.carregarProposta();
      return;
    }
    
  
  }

  async update(id: any) {
    await this.firebase.db().collection("proposta").doc(id).update(this.proposta);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, espere...' });
    return this.loading.present();
  }

}
