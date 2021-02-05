import { Injectable } from '@angular/core';
import { CanActivate, RouterState, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountservice: AccountService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        let logged = this.accountservice.isLoggedIn();
        if (logged) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
