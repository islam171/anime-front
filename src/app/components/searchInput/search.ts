import {
    AfterViewInit,
    Component,
    ElementRef, EventEmitter,
    inject,
    OnInit, Output,
    ViewChild
} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-searchInput',
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './search.html',
    styleUrl: './search.css',
})
export class Search implements AfterViewInit, OnInit {

    @Output() public search = new EventEmitter();

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    onSearch(value: string) {
        console.log(value);
        this.search.emit(value);
    }
}
