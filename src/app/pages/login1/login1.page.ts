import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth }  from "firebase/app";
import { Keyboard } from  '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

  public userLogin: User = {};
  private loading: any;
  public passwordType: string = "password";
  passwordShow: boolean = false;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    public FirebaseAuth: AngularFireAuth,
    public keyboard: Keyboard
  ) { }

  ngOnInit() {

  }
  async login() {
    await this.presentLoading()
    try {
      await this.authService.logar(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async loginFacebook() {
    try {
      await this.FirebaseAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());  
    } catch (error) {
      this.presentToast(error.message);
    } finally {
    }
  }


  public togglePassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = "password";
    }else{
      this.passwordShow = true;
      this.passwordType = "text";
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, espere...' });
    return this.loading.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}

