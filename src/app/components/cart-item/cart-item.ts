import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IAnime} from "../../models/anime";

@Component({
  selector: 'app-cart-item',
    imports: [
        RouterLink
    ],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
    @Input() anime : IAnime | null = null;
    @Output() selectedAnime = new EventEmitter();



    selectAnime(anime: IAnime): void {
        this.selectedAnime.emit(anime);
    }
}
