import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from '../interfaces/user'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  logar(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email,user.password);
  }
  registra(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
  logout() {

  }
  getAuth(){
    return this.afa.auth;
  }
 
}

