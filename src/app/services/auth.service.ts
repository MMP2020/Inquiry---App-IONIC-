import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Platform } from '@ionic/angular';
import { User } from '../interfaces/user'
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse  } from '@ionic-native/facebook/ngx';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private afa: AngularFireAuth,
      private fb: Facebook,
      public platform: Platform
    ) { }

  logar(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email,user.password);
  }
  registra(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  doFacebookLogin(){
    return new Promise<User>((resolve, reject) => {
      if (this.platform.is('cordova')) {
        //["public_profile"] is the array of permissions, you can add more if you need
        this.fb.login([])
        .then((response: FacebookLoginResponse ) => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
          firebase.auth().signInWithCredential(facebookCredential)
            .then(user => resolve());
        }, err => reject(err)
        );
      }
      else {
        this.afa.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
      }
    })
  }
  logout() {

  }
  getAuth(){
    return this.afa.auth;
  }
 
}

