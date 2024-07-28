import { inject, Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from '../models/user.model';
 
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  singIn(user:User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  constructor() { }
}
