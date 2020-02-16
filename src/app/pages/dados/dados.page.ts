import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  public user: any;
  public userDados: User = {};

  public password: any = null;
  private loading: any;
  public passwordType: string = "password";
  passwordShow: boolean = false;
  public uploadPercent: Observable<number>;
  public URL: Observable<string>;
  private blob: Blob;
  constructor(public FirebaseAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private camera: Camera,
    private file: File,
    private Storage: AngularFireStorage, ) { }

  ngOnInit() {
    this.user = this.FirebaseAuth.auth.currentUser
    this.userDados = Object.assign({}, this.user)
  }

  async fotos() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      saveToPhotoAlbum: false,
    }
    try {


      const fileUri: string = await this.camera.getPicture(options);


      let file: string = fileUri.substring(fileUri.lastIndexOf('/') + 1, fileUri.indexOf('?'));


      const path: string = fileUri.substring(0, fileUri.lastIndexOf('/'));


      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);

      const blob = new Blob([buffer], { type: 'image/jpeg' });

      this.uploadPicture(blob);

    } catch (error) {
      console.log(error)
    }
  }



  async uploadPicture(blob: Blob) {

    const ref = this.Storage.ref(this.user.uid + '.jpg');

    const task = ref.put(blob);

    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(() => ref.getDownloadURL().subscribe(async (x) => { this.userDados.photoURL = await x; }))

    ).subscribe();

  }


  async salvar() {

    var msg: string;

    await this.user.updateProfile({
      displayName: this.userDados.displayName,
      photoURL: this.userDados.photoURL,
    }).then(function () {
      msg = "Salvo com sucesso!"
    }).catch(function (error) {
      msg = "ERRO"
    });



    await this.user.updateEmail(this.userDados.email).then(function () {
      // Update successful.
    }).catch(function (error) {
      let message: string = 'ERRO';
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'E-mail já está sendo usado!';
          break;
        case 'auth/invalid-email':
          message = 'E-mail invalido!';
          break;
        case 'auth/requires-recent-login':
          message = 'Para alterar o seu email, você precisa ter feito login recentemente.';
          break;
      }
      msg = message;
    });

    if ((this.password) != null) {

      await this.user.updatePassword(this.password).then(function () {
        // Update successful.
      }).catch(function (error) {
        let message: string = 'ERRO';
        switch (error.code) {
          case 'auth/weak-password':
            message = 'Senha fraca';
            break;
          case 'auth/requires-recent-login':
            message = 'Para alterar a sua senha, você precisa ter feito login recentemente.';
            break;
        }
        msg = message;
      });
    }
    this.presentToast(msg);
  }


  async excluir() {
    var msg: string;

    await this.user.delete().then(function () {
      // User deleted.
    }).catch(function (error) {
      let message: string = 'ERRO';
      switch (error.code) {
        case 'auth/requires-recent-login':
          message = 'Para excluir sua conta, você precisa ter feito login recentemente.';
          break;
      }
      msg = message;
    });
    this.presentToast(msg);
  }

  public togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = "password";
    } else {
      this.passwordShow = true;
      this.passwordType = "text";
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, espere...' });
    return this.loading.present();
  }


}
