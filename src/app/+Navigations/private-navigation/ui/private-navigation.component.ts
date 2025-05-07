import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable, Subscribable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-private-navigation',
  templateUrl: './private-navigation.component.html',
  styleUrl: './private-navigation.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    MatMenuModule
  ]
})

export class PrivateNavigationComponent {
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);
  
  Observable = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isHandset$: Observable<unknown> | Subscribable<unknown> | Promise<unknown> | undefined;
  list() {
    this.router.navigateByUrl('/admin-books')
  }
  add() {
    this.router.navigateByUrl('/add-book');
  }
  category() {
    this.router.navigateByUrl('/category');
  }
  members() {
    this.router.navigateByUrl('/members');
  }
  addmember() {
    this.router.navigateByUrl('/add-members');
  }
}



