import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth }  from "firebase/app";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public FirebaseAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async logout() {  
    await this.FirebaseAuth.auth.signOut();
  }
}
