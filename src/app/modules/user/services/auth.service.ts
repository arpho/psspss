import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.default.auth().signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): Promise<void> {
    return firebase.default.auth().sendPasswordResetEmail(email);
  }

  signupUser(email: string, password: string): Promise<any> {
    return firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(newUserCredential => {
        newUserCredential.user.sendEmailVerification();
        // recupero uid dell'utente loggato
        const auth = firebase.default.auth()
        auth.onAuthStateChanged(user => {
          const uid = user.uid
          //creo l'utente in userProfile
          firebase
            .default
            .database()
            .ref(`/userProfile/${uid}/email`)
            .set(email);
          firebase
            .default
            .database()
            .ref(`/userProfile/${uid}/uid`)
            .set(uid);
          firebase
            .default
            .database()
            .ref(`/userProfile/${uid}/signedUser`)
            .set(true);
        })

        //@TODO set base role
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  logoutUser(): Promise<void> {
    const userId: string = firebase.default.auth().currentUser.uid;
    firebase
      .default
      .database()
      .ref(`/userProfile/${userId}`)
      .off();
    return firebase.default.auth().signOut();
  }

}