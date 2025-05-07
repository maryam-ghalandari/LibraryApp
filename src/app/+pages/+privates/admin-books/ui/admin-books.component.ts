import { Component } from '@angular/core';
import { BookComponent } from '../../../+publics/books/book/ui/book.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-books',
  imports: [AddBookComponent, RouterOutlet, RouterLink],
  templateUrl: './admin-books.component.html',
  styleUrl: './admin-books.component.scss'
})
export class AdminBooksComponent {
books:[] | undefined
}
