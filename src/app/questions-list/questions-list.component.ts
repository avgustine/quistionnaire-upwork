import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IQuestion } from '../IQuestion';
import { QuestionsCrudService } from '../questions-crud.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit, OnDestroy {

  answeredQuestions: IQuestion[] = [];
  unasweredQuestions: IQuestion[] = [];
  sub?: Subscription

  constructor(private questionService: QuestionsCrudService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  removeAnswer(createdAt: string| number){
    this.questionService.removeAnswer(createdAt);
    this.refreshItems();
    this.questionService.retrieveItemsSortByCreation();
    this.splitQuestions();
  }

  saveAnswer(question: Partial<IQuestion>){
    this.questionService.updateQuestion(question as IQuestion);
    this.refreshItems();
    this.questionService.retrieveItemsSortByCreation();
    this.splitQuestions();
  }

  ngOnInit(): void {
    this.refreshItems();
    this.questionService.retrieveItemsSortByCreation();
    this.splitQuestions();
  }

  refreshItems(){
    const questions = this.questionService.getItems();
    }

  splitQuestions(){
    this.answeredQuestions = []
    this.unasweredQuestions = []
    this.sub = this.questionService.getItems().subscribe(questions => {
      questions.map(question => {
        if(question.answer){
          this.answeredQuestions.push(question)
        } else {
          this.unasweredQuestions.push(question)
        }
      }
      )
      this.answeredQuestions = this.questionService.sortByAnswerDateAsc(this.answeredQuestions);
    })
  }



}
