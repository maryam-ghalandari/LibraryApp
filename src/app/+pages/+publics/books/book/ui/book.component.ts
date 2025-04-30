import { Component } from '@angular/core';
import { Book } from '../models/book';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-book',
  imports: [MatCardModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  book: Book={id:'', title: '', writer: '', publisher: '', price: '', image:'' }
}