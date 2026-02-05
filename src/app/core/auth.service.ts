import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators/catchError";
import { LocalStorageService } from "./local-storage.service";
import { API_URL } from "./constants.service";
import { UsersService } from "./users.service";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly localStorageKey = 'auth_token';
  private readonly localStorage = inject(LocalStorageService);
  private readonly http = inject(HttpClient);
  private readonly usersService = inject(UsersService);

  setToken(token: string) {
    this.localStorage.setItem(this.localStorageKey, token);
  }

  login(email: string, password: string) {
    return this.http.post(
      `${API_URL}auth/login`,
      { 
        username: email,
        password: password
      }
    ).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  logout() {
    // Implement logout logic here
    console.log('Logging out');
  }

  signUp(email: string, userName: string, password: string) {
    return this.http.post(
      `${API_URL}users`,
      { 
        email,
        userName,
        password
      }
    );
  }
}