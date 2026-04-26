import {ChangeDetectorRef, Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {List} from "../../components/list/list";
import {Search} from "../../components/searchInput/search";
import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
    from,
    startWith,
    Subject,
    Subscription,
    switchMap
} from "rxjs";
import {AnimeService} from "../../services/anime";

@Component({
  selector: 'app-home-page',
    imports: [
        List,
        Search
    ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit, OnDestroy {
    animeService = inject(AnimeService)
    private searchSubject = new Subject<string>()

    ngOnInit() {
        this.searchSubject.pipe(
            startWith(""),
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(query => {
                return this.animeService.searchAnime(query)
            })
        ).subscribe({
            error: error => {
                console.log(error);
            }
        })
    }

    ngOnDestroy() {
    }

    onSearch(query: string) {
        this.searchSubject.next(query);
    }
}
