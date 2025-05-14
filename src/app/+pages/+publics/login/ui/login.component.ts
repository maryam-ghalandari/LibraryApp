import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Login } from '../models/login';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../../+shared/+services/auth.service';
// import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  imports: [
    RouterOutlet,
    RouterLink,
    AsyncPipe,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule,
    // MatDialogModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  Auth = inject(AuthService);
  router = inject(Router);
  busy = false;
  message: string = '';
  login: Login = { username: '', password: '', keepme: false };
  check() {
    this.busy = true;
    let result = this.Auth.check(this.login.username, this.login.password);
    result.subscribe (r=> {
      if (r == true) {
        this.router.navigateByUrl('/admin');
      }
      else {
        this.message = 'نام کاربری یا کلمه عبور اشتباه است';
      }

      this.busy = false;
    });
  }
  isValid() {
    if (this.login.username.trim() == '' || this.login.password == '') {

      return false;
    }
    return true;
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}



