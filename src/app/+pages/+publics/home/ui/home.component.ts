import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BooksComponent } from '../../books/ui/books.component';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, BooksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
