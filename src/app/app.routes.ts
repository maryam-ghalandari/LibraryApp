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
import { AddMembersComponent } from './+pages/+privates/members/add-members/add-members.component';
import { AddBookComponent } from './+pages/+privates/admin-books/add-book/add-book.component';
import { LoansComponent } from './+pages/+privates/loans/loans.component';
import { CategoriesComponent } from './+pages/+privates/admin-books/categories/categories.component';

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
        path: 'private', component: PrivateNavigationComponent, children: [
            
            { path: 'dashbourd', component: DashbourdComponent },
            { path: 'adminbooks', component: AdminBooksComponent },
            { path: 'add-book', component: AddBookComponent },
            { path: 'books-list', component: AdminBooksComponent },
            { path: 'category', component: CategoriesComponent },
            { path: 'members', component: MembersComponent },
            { path: 'add-member', component: AddMembersComponent },
            { path: 'loans', component: LoansComponent },
            { path: 'logout', component: LoginComponent },
            { path: '', redirectTo: 'dashbourd', pathMatch: 'prefix' }

        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'public', pathMatch: 'full' }

];
