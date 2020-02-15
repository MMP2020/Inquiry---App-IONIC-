import { Component, OnInit } from '@angular/core';
import { Proposta } from 'src/app/interfaces/proposta';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public proposta: Proposta = {};
  public newProposta: Proposta={}; 
  private loading: any;
  private id: any;
  public uid: any; 

  constructor(private firebase: FirebaseService, public FirebaseAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,) { }



  ngOnInit() {
    this.carregar();
  }
  async carregar(){
    await this.presentLoading();
    this.uid = this.FirebaseAuth.auth.currentUser.uid;
    const results = this.firebase.db().collection('proposta')
                                      .where('uid','==',''+this.uid).where('ativo',"==","true")
                                      .onSnapshot(results => {
    this.proposta = {};  
    results.docs.forEach(doc => {
        this.id = doc.id;
        this.proposta= doc.data()});
      });

    this.loading.dismiss();
    }

  async finalizar(){
    this.newProposta.uid = this.uid;
    this.newProposta.ativo = "true";
    this.newProposta.compartilhar = false;
    try{
      await this.update(); 
      await this.firebase.db()
                   .collection("proposta")
                   .doc()
                   .set(this.newProposta);
    }catch(error){
       console.log(error);
   }              
  }

  async update(){
      this.proposta.ativo = "false";
      await this.firebase.db().collection("proposta").doc(this.id).update(this.proposta);
  }  

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, espere...' });
    return this.loading.present();
  }
}
