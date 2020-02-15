import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  splash = true;
  
  constructor(private router: Router) {
   }
   ionViewWillEnter() {
    setTimeout(() => {
      this.splash = false;
      this.router.navigate(['login']);
    },3000);
  }

  
  ngOnInit() {
  }

}
