import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from  '@ionic-native/keyboard/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { auth }  from "firebase/app";
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};
  private loading: any;
  public passwordType: string = "password";
  public uploadPercent: Observable<number>;
  public URL: Observable<string>;
  passwordShow: boolean = false;
  currentImage:any;
  private blob:Blob;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    public keyboard: Keyboard,
    private firebase: FirebaseService,
    public FirebaseAuth: AngularFireAuth,
    private photoLibrary: PhotoLibrary,
    private camera: Camera,
    private file: File, 
    private Storage: AngularFireStorage,
  ) { }

  ngOnInit() {
  }



  async fotos(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true,
      saveToPhotoAlbum:false,
    }
    try{
      
      
      const fileUri: string = await this.camera.getPicture(options);


      let file: string = fileUri.substring(fileUri.lastIndexOf('/')+1,fileUri.indexOf('?'));
  
      
      const path: string = fileUri.substring(0,fileUri.lastIndexOf('/'));


      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);

      this.blob = new Blob([buffer], {type: 'image/jpeg'});

      
      
    }catch(error){
      console.log(error)
    }
  }



 async uploadPicture(blob:Blob){

    const ref =  this.Storage.ref(this.userRegister.email + '.jpg');

    const task = ref.put(blob);

    this.uploadPercent = task.percentageChanges();

   task.snapshotChanges().pipe(
      finalize(async ()=> { 
        
       ref.getDownloadURL().subscribe( async (x) => { this.userRegister.photoURL = await x; await this.FirebaseAuth.auth.currentUser.updateProfile({
        photoURL: this.userRegister.photoURL,
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened
      });})
      })
    ).subscribe();
    
  }

  async loginFacebook() {
    try {
      await this.FirebaseAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());  
    } catch (error) {
      this.presentToast(error.message);
    } finally {
    }
  }

  
  
  async register() {
    await this.presentLoading();
    try {
      const user = Object.assign({},this.userRegister)
      const newUser = await this.authService.registra(user);
      await this.FirebaseAuth.auth.currentUser.updateProfile({
        displayName: user.displayName,
      }).then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened
      });
    } catch (error) {
      let message: string;

      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'E-mail já está sendo usado!';
          break;
        case 'auth/invalid-email':
          message = 'E-mail invalido!';
          break;
      }
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
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

  public togglePassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = "password";
    }else{
      this.passwordShow = true;
      this.passwordType = "text";
    }
  }
}
