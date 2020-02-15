import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, IonContent } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth }  from "firebase/app";
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';



@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.page.html',
  styleUrls: ['./introducao.page.scss'],
})
export class IntroducaoPage implements OnInit {
  @ViewChild(IonSlides,{static: false}) slides: IonSlides;
  @ViewChild(IonContent,{static: false}) content: IonContent;
  
  public habilita ='Desabilitar';
  public enable = false;

  public userEmail: any;
  public userPhoto: any;
  public userNome: any;
  public user: any;
  public scroll: boolean;
  

  constructor(public menu: MenuController,public FirebaseAuth: AngularFireAuth,private authService: AuthService,private browserTab: BrowserTab) { 
    
  }

  abrirFoto(){
    this.browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        this.browserTab.openUrl("https://firebasestorage.googleapis.com/v0/b/inquiry-14b61.appspot.com/o/back.jpg?alt=media&token=35b5c1fe-6bcc-4062-beb2-c9d83a30bc2f");
      } else {
        // open URL with InAppBrowser instead or SafariViewController
      }
    });
    }

  toggleMenu(){
    this.menu.enable(this.enable, 'menu');
    this.habilita = !this.enable ? 'Habilitar' : 'Desabilitar';
    this.enable = !this.enable;
  }

  abrir(){
    this.menu.open('menu');
  }

  mudar(event: any){
    if( event.detail.value === 'Apresentação'){
      this.slides.slidePrev();
      this.content.scrollToTop();
      this.content.scrollY = true;
    }else{
      this.slides.slideNext();
      this.content.scrollToTop();
      this.content.scrollY = false;
    }
  }

  photoChange(){
  this.FirebaseAuth.auth.currentUser.updateProfile({
      photoURL: "assets/perfil2.jpg"
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }


  ngOnInit() {
  this.user = this.FirebaseAuth.auth.currentUser;
  if(this.user.photoURL===null){this.photoChange()};
  }

}
