import { Component } from '@angular/core';
import { BookComponent } from '../book/ui/book.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-books',
  imports: [BookComponent, MatCardModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  books= [
    {id:1000, title: 'کتابخانه نیمه شب', writer: 'مت هیگ', price: 258000, image: "/images/book1.jpg"},
    {id:1001, title: 'تکه هایی از یک کل منسجم', writer: 'پونه مقیمی', price: 372000, image: "/images/book2.jpg"},
    {id:1002, title: 'مکان اشتباه زمان اشتباه', writer: 'جیلیان مک آلبستر', price: 110000, image: "/images/book3.jpg"},
    {id:1003, title: 'زبان بدن آنچه بدن می گوید', writer: 'جو ناوارا', price: 320000, image: "/images/book4.jpg"}
  ];

}
