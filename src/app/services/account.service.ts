import { User } from './../components/login/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../components/login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url = environment.SERVER_URL;



  constructor(private http: HttpClient) { }
  LoggedIn = false;
  login(user: boolean): boolean {

    if (user == true) {
      this.LoggedIn = true;
      // localStorage.setItem('isLogged', user.email);
      return true;
    }
    return false;
  }


  getUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.url + '/users')
  }

  newUser(User: User): Boolean {

    this.http.post(`${this.url}/auth/register`, {
      email: User.email,
      password: User.password,
      firstname: User.firstname,
      lastname: User.lastname
    }).subscribe();
    console.log(true)
    return true;

  }

  isLoggedIn() {
    return this.LoggedIn;
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.LoggedIn = false;
  }
}
