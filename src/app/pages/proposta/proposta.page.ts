import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Proposta } from 'src/app/interfaces/proposta';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.page.html',
  styleUrls: ['./proposta.page.scss'],
})
export class PropostaPage implements OnInit {

  @Input() proposta: Proposta;
  @Input() i: number;
  @Input() op: string;

  public uid: any;
  item: Proposta = { };

  constructor(private firebase: FirebaseService, public FirebaseAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,public modal: ModalController) { }

  ngOnInit() {
    if (this.proposta != null)
        this.item=this.proposta;
    this.uid = this.FirebaseAuth.auth.currentUser.uid;
  }

  close(){
    this.modal.dismiss({
      op: 'close',
      proposta: this.item
    });
  }

  compartilhar(b:boolean){
    this.item.compartilhar=b;
  }
  
  edit(){
    this.modal.dismiss({
      op: 'edit',
      proposta: this.item
    });
  }

  excluir(){
    this.modal.dismiss({
      op: 'excluir',
      proposta: this.item
    });
  }

}
