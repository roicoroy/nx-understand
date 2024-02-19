import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router';

import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/store/auth/auth.state';
import { AlertService } from '../services/alert/alert.service';
import { NavigationService } from '../services/navigation/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private store = inject(Store);
  
  private navigation = inject(NavigationService);

  private alert = inject(AlertService);
  
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const isLoggedIn = this.store.selectSnapshot(AuthState.isLoggedIn);
    if (!isLoggedIn) {
      // this.alert.presentSimpleAlertNavigate('Sorry, need to login first', 'login');
      this.navigation.navControllerDefault('/login');
    }
    return;
    // return isLoggedIn;
  }
}
