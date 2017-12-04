import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../global/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string;
  public password: string;
  constructor(public authService: AuthService, private router: Router) {}

  async login() {
    await this.authService.signInWithEmail(this.email, this.password);
    this.email = this.password = '';
    this.router.navigate(['mainView']);
  }

}
