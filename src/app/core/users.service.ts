import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { API_URL } from './constants.service';

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  address: Address;
  __v: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly localeStorageService = inject(LocalStorageService);
  private readonly http = inject(HttpClient);
  private readonly localStorageKey = 'user';

  getAndStoreUser() {
    return this.http
      .get<User>(`${API_URL}users/1`)
      .pipe(
        switchMap((user) => {
          this.localeStorageService.setItem(this.localStorageKey, JSON.stringify(user));
          return of(user);
        }),
        catchError(this.handleError));
  }

  private handleError(error: unknown) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Failed to fetch user'));
  }
}
