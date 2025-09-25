import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  private router = inject(Router)

  public logout() {
    localStorage.clear()
    this.router.navigate(['identity', 'login']).catch(err => console.log(err))
  }
}
