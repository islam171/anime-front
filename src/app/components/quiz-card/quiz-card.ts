import {Component, Input, input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  imports: [],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.css',
})
export class QuizCard implements OnChanges {
    title = input('');
    ngOnChanges(changes: SimpleChanges<QuizCard>) {
        if(changes.title) {
            console.log(changes.title.currentValue);
            console.log(changes.title.previousValue);
        }
    }
}
