import { Component, OnInit } from '@angular/core';
import { Proposta } from 'src/app/interfaces/proposta';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {

  public atividades: Array<Object>=[
    {titulo: 'Problematização',icon:'help',href:'/problematizacao'},
    {titulo: 'Levantamento de hipóteses',icon:'today',href:'/hipoteses' },
    {titulo: 'Analise das relações CTS e de ativismo',icon:'analytics',href:'/analise'},
    {titulo:'Conteúdo científico',icon:'help-circle-outline',href:'/conteudo'},
    {titulo:'Cooperação de diferentes áreas do conhecimento',icon:'contacts',href:'/planejamento'},
    {titulo:'Planejamento dos procedimentos',icon:'today',href:'/cooperacao'},
    {titulo:'Realização da investigação',icon:'information-circle',href:'/investigacao'},
    {titulo:'Análise dos dados',icon:'analytics',href:'/analise2'},
    {titulo:'Retomada e discussão da QSC inicial',icon:'help-circle-outline',href:'/retomada'},
    {titulo:'Aplicação em situações novas',icon:'play-circle',href:'/acao'},
    {titulo:'Comunicação',icon:'radio',href:'/comunicacao'},
    {titulo:'Construção de redes colaborativas',icon:'globe',href:'/redes'},
  ];
  
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

    async presentLoading() {
      this.loading = await this.loadingCtrl.create({ message: 'Por favor, espere...' });
      return this.loading.present();
    }

}
