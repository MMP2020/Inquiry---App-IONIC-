import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { LoadingController} from '@ionic/angular';

import {Http, Headers} from "@angular/http"

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage implements OnInit {
  public listaYoutube: Array<Object>;
  public listaThumb: Array<Object>;
  @Input() id: any;
  private loading: any;
  apiKey ="AIzaSyBWf2tUymTBbi_L51-8R2TKUOAFVYSciqM";

  constructor(private http: Http, private firebase: FirebaseService, public modal: ModalController, public modalTexto: ModalController,private youtube: YoutubeVideoPlayer,private loadingCtrl: LoadingController,) {
   }

   
   getYoutube(id){
    
    //let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&relatedToVideoId=' + id + '&part=snippet,&type=video,&q='+id;
    //let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q='+id+'&relatedToVideoId='+id+'&key='+this.apiKey;
    let url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+id+'&key='+this.apiKey;
    this.http.get(url).subscribe(
      sucesso =>{this.finalizado(sucesso.json()['items']);
                              },
      erro =>{console.log(erro)}
    );
  }

  finalizado(id){
    console.log(id)
  }

   async carregarThumbs() {
   
    for (var i = 1; i < 10; i++) {
     this.getYoutube(this.listaYoutube[i]['link']);
    }
  
  }
  
   

  ngOnInit() {
   this.carregarlistaYoutube();
   
  }

  async carregarlistaYoutube(){
    await this.presentLoading();

    const results = this.firebase.db().collection(''+this.id)
                                      .onSnapshot(results => {
     this.listaYoutube = [];  
     results.docs.forEach(doc => {
         this.listaYoutube.push({id: doc.id, ...doc.data()});
      });

      this.loading.dismiss();
    });
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: '' });
    return this.loading.present();
  }

  assistir(id){
    this.youtube.openVideo(id);
  }

   close(){
    this.modal.dismiss({});
  }

}

