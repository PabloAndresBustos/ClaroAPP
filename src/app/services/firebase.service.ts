import { inject, Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../models/user.model';
 
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  singIn(user:User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  singUp(user:User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.email);
  }

  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName});
  }

  constructor() { }
}
