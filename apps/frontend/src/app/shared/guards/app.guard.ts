import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UtilityService } from '../services/utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild {

  urlPath: any;

  isLoggedIn$: Observable<boolean[]>;
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private store: Store,
    private utility: UtilityService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkAuthState();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkAuthState();
  }

  checkAuthState(): boolean {

    this.router.events.subscribe((e: any) => {
      // console.log('e', e.route?.path);
      this.urlPath = e.route?.path;
    });

    this.isLoggedIn = this.store.selectSnapshot<boolean>((state) => state.authState.isLoggedIn);
    console.log('isLoggedIn', this.isLoggedIn);
    
    // console.log('this.urlPath', this.urlPath);
    // const authState = this.authService.isAuthenticated;
    // const authState = this.authService.isAuthenticated;
    
    this.isLoggedIn$ = this.store.select(state => state.autState.isLoggedIn);
    
    // // console.log(this.isLoggedIn$);
    // this.isLoggedIn$.subscribe((isLoggedIn) => {
    //   console.log('isLoggedIn', isLoggedIn);
    // });

    if (!this.isLoggedIn) {
      // console.log('isLoggedIn', this.isLoggedIn);
      // this.utility.presentAlert('You need to Login first, please.').then((res)=>{
      //   // console.log(res);
      // });
      return false;
    }
    return true;
  }

  // async openModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: ModalExampleComponent,
  //   });
  //   modal.present();

  //   const { data, role } = await modal.onWillDismiss();

  //   if (role === 'confirm') {
  //     this.message = `Hello, ${data}!`;
  //   }
  // }
}
