import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/+publics/home/ui/home.component';
import { PublicNavigationComponent } from './+Navigations/public-navigation/ui/public-navigation.component';
import { AboutComponent } from './+pages/+publics/about/ui/about.component';
import { BooksComponent } from './+pages/+publics/books/ui/books.component';
import { MembersComponent } from '../../members/ui/members.component';
import { LoginComponent } from './+pages/+publics/login/ui/login.component';
import { AdminBooksComponent } from './+pages/+privates/admin-books/ui/admin-books.component';
import { PrivateNavigationComponent } from './+Navigations/private-navigation/ui/private-navigation.component';
import { DashbourdComponent } from './+pages/+privates/dashbourd/dashbourd.component';

export const routes: Routes = [
    {
        path: 'public', component: PublicNavigationComponent, children: [

            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'books', component: BooksComponent },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' }
        ]
    },
    {
        path: 'admin', component: PrivateNavigationComponent, children: [
            { path: 'home', component: DashbourdComponent },
            { path: 'members', component: MembersComponent },
            {path: 'adminbooks', component: AdminBooksComponent},
            { path: '', redirectTo: 'home', pathMatch: 'prefix' }

        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'public', pathMatch: 'full' }

];
