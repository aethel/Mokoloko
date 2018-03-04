import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  public signInWithEmail(email: string, pass: string) {
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, pass)
    .then(val => this.router.navigate(['mainView']))
    .catch(err => console.log(err));
    // TODO add error page
  }

  public signUp(email: string, pass: string) {
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(email, pass)
    .then(val => console.log(val, 'in'))
    .catch(err => console.log(err));
  }

  public logout() {
    console.log('logout');
    this.firebaseAuth
    .auth
    .signOut().then(val => this.router.navigate(['login']));

  }
}
