import { inject, Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from '../models/user.model';
import { getFirestore, getDoc, setDoc, doc, Firestore } from '@angular/fire/firestore';

 
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore = inject(Firestore);
 
  /* Inicio de sesion, registro y actualizacion de usuario */

  singIn(user:User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  singUp(user:User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, {displayName});
  }

  /* Fin de inicio de sesion y registro */

  /* Gestion de la base de datos */

  addDocument(path:string, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path:string){
    return (await getDoc(doc(getFirestore(), path))).data()
  }

  /* Fin de gestion de base de datos */


  /* Gestion localStorage */

  saveLocalStorage(key:string, value:any){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key));
  }

  /* Fin Gestion localStorage */

}
