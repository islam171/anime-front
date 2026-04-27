import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, tap, throwError} from "rxjs";
import {IAnime, IAnimeResponse} from "../models/anime";

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
    private readonly http = inject(HttpClient);
    private readonly baseURL = "https://anime-back-hw6ux.ondigitalocean.app/api"

    private readonly animeSubject = new BehaviorSubject<IAnime[]>([])
    anime$ = this.animeSubject.asObservable();

    getAll() : Observable<IAnime[]>{
        return this.http.get<IAnimeResponse>(`${this.baseURL}/anime`).pipe(
            map(value => value.data),
            tap(value => this.animeSubject.next(value)),
            catchError(err => {
                console.error('Ошибка при загрузке аниме', err);
                return throwError(() => err);
            })
        )
    }

    searchAnime(value: string):Observable<IAnime[]>{
        const params = new HttpParams().set('q', value);
        return this.http.get<IAnime[]>(`${this.baseURL}/anime`, {params}).pipe(
            tap((value: IAnime[]) => {
                this.animeSubject.next(value)
            }),
            catchError(err => {
                console.error('Ошибка при загрузке аниме', err);
                return throwError(() => err);
            })
        )
    }

    getAnimeById(id: number): Observable<IAnime> {
        return this.http
            .get<IAnime>(`${this.baseURL}/anime/${id}`)
            .pipe(
                map((value: IAnime) => value),
                catchError(err => {
                    console.error('Ошибка при загрузке аниме', err);
                    return throwError(() => err);
                })
            );
    }
}
