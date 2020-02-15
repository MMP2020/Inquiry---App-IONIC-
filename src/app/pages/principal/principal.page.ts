import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth }  from "firebase/app";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  public user: User = {};

  constructor(private authService: AuthService,
  public FirebaseAuth: AngularFireAuth) { 
  }


  ngOnInit() {
  }

  async logout() {  
    await this.FirebaseAuth.auth.signOut();
  }
}
