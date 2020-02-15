import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
})
export class EnvioPage implements OnInit {

    currentImage: any;
  
    constructor(private camera: Camera, public social: SocialSharing) { }
  
  
  ngOnInit() {
  }

  async takePicture() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };

    try{
      await this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
        console.log("Camera issue:" + err);
      });
    }catch(error){
      console.log(error);
    }
  }

  async enviar(mensagem, assunto=null, file=null, url=null){
    
    try {
      await this.social.share(mensagem, assunto, file, url)
      .then(function() {
        // Update successful.
      }).catch(function(error) {
        // An error happened.
      });
    } catch (error) {
      let message: string;
      alert(error.code);
    } finally {
    }
  }

}
