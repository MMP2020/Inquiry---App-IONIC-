import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { 
  }

  storage(){
    return firebase.storage();
  }
  db(){
    return firebase.firestore();  
  }
}
