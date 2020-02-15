import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { OrientacaoPageModule } from './pages/orientacao/orientacao.module';
import { TextosPageModule } from './pages/textos/textos.module';
import { TextoPageModule } from './pages/texto/texto.module';
import { PropostaPageModule } from './pages/proposta/proposta.module';
import { YoutubePageModule } from './pages/youtube/youtube.module';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { Keyboard } from  '@ionic-native/keyboard/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx'
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { HttpModule } from '@angular/http';


import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    OrientacaoPageModule,
    TextosPageModule,
    TextoPageModule,
    YoutubePageModule,
    PropostaPageModule,
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    Keyboard,
    Camera,
    PhotoLibrary,
    SocialSharing,
    File,
    BrowserTab,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
