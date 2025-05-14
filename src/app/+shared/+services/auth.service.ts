import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mockUsers: User[] = [
    { username: 'manager', password: 'manager', fullname: 'مدیر', enabled: true },
    { username: 'admin', password: 'admin', fullname: 'ادمین', enabled: true },
    { username: 'guest', password: 'guest', fullname: 'مهمان', enabled: false },
    { username: 'writer', password: 'writer', fullname: 'نویسنده', enabled: false }
  ];
  check(username: string, password: string) {
    let success = true;
    let result = this.mockUsers.filter(u => u.username == username && u.password == password)
    if (result.length == 0) {

      success= false;
    }
    return of (success);
  }
}

interface User {
  username: string;
  password: string;
  fullname: string;
  enabled: boolean;
}
