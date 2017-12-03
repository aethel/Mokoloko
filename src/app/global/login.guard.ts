import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const userIn = 'in';
      this.authService.user.subscribe(async res => await console.log(res, 'AKAK'));
      // if (this.authService.user. === userIn) {
        return false;
      // }
  }
}
