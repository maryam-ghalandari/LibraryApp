import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/+publics/home/ui/home.component';
import { PublicNavigationComponent } from './+Navigations/public-navigation/ui/public-navigation.component';
import { PrivateNavigationComponent } from './+Navigations/private-navigation/private-navigation.component';
import { AboutComponent } from './+pages/+publics/about/ui/about.component';
import { BooksComponent } from './+pages/+publics/books/ui/books.component';
import { MembersComponent } from '../../members/ui/members.component';
import { LoginComponent } from './+pages/+publics/login/ui/login.component';
import { AdminBooksComponent } from './+pages/+privates/admin-books/ui/admin-books.component';
import { AddMembersComponent } from './+pages/+privates/members/add-members/add-members.component';
import { AddBookComponent } from './+pages/+privates/admin-books/add-book/add-book.component';
import { LoansComponent } from './+pages/+privates/loans/loans.component';
import { CategoriesComponent } from './+pages/+privates/admin-books/categories/categories.component';
import { DashboardComponent } from './+pages/+privates/dashboard/ui/dashboard.component';

export const routes: Routes = [

    {path: 'public', component: PublicNavigationComponent, children:[
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'books', component: BooksComponent },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' }
        ]
    },
    {
        path: 'admin', component: PrivateNavigationComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'admin-books', component: AdminBooksComponent },
            { path: 'add-book', component: AddBookComponent },
            { path: 'books-list', component: AdminBooksComponent },
            { path: 'categories', component: CategoriesComponent },
            { path: 'members', component: MembersComponent },
            { path: 'add-member', component: AddMembersComponent },
            { path: 'loans', component: LoansComponent },
            { path: 'logout', component: LoginComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' }

        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'public/home', pathMatch: 'full' }
];
