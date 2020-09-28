import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryFilterGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state.url);
      // const accessToken = this._auth.isLoggedIn;
      // if (!accessToken) {
      //   this._auth.logout();
  
      //   this._router.navigate(['/account/login'], {
      //     queryParams: {
      //       return: state.url
      //     }
      //   });
  
      //   return false;
      // }
      return true;
  }
  
}
