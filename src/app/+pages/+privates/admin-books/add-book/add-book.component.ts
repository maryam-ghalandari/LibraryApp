import { Component, inject } from '@angular/core';
import { Addbook } from './models/add-book';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; 
import { InventoryService } from '../../../../+services/inventory.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-book',
  imports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    RouterOutlet, 
    RouterLink
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
// isvalid() {
// if(this.addbook.id() =='' || this.addbook.category() =='' || this.addbook.title() =='' || this.addbook.image()=='' && this.writer && this.publisher && this.price=true)
// console.log(this.addbook);
// }
InventoryService=inject(InventoryService);
  addbook: Addbook = { id: '', category: '', title: '', writer: '', publisher: '', price: '', image: '', number: 0 }
  add() {
    console.log(this.addbook);
  }


}
