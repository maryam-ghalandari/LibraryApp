import { inject, Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  inventoryService = inject(InventoryService);
  InventoryService: any;
  addBasket(){
    this.InventoryService.inventory--;
  }
  removeBasket(){
    this.InventoryService.basket++;
  }
}
