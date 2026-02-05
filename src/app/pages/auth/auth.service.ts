import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "../../core/local-storage.service";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly localStorageKey = 'auth_token';
  private readonly localStorage = inject(LocalStorageService);
  private readonly http = inject(HttpClient);

  private API_URL = 'https://fakestoreapi.com/';

  setToken(token: string) {
    this.localStorage.setItem(this.localStorageKey, token);
  }

  login(email: string, password: string) {
    return this.http.post(
      `${this.API_URL}auth/login`,
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
      `${this.API_URL}users`,
      { 
        email,
        userName,
        password
      }
    );
  }
}