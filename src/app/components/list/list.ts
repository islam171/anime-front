import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {AnimeService} from "../../services/anime";
import {CartItem} from "../cart-item/cart-item";
import {IAnime} from "../../models/anime";

@Component({
  selector: 'app-list',
    imports: [
        CartItem,
        AsyncPipe,
    ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {

    animeService = inject(AnimeService)
    anime$ = this.animeService.anime$;

    ngOnInit(): void {
        console.log(this.anime$)
    }

    selectAnime(anime: IAnime): void {
        console.log(`Selected anime: ${anime.title}`);
    }
}
