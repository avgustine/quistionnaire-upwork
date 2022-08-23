import { assertPlatform, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IQuestion } from './IQuestion';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})

export class QuestionsCrudService {

  private allQuestion =  new BehaviorSubject<IQuestion[]>([]);

  private questionsStorageKey = 'questions';

  constructor(private localService: LocalService) { }

  loadByTimestamp(id : string| number):IQuestion|void{
    const questionsFromStorage = this.localService.getData(this.questionsStorageKey);

    if(questionsFromStorage){
      try{
        const parsed = JSON.parse(questionsFromStorage) as IQuestion[];
        return parsed.find(question => question.createdAt == id);
      } catch (e) {
        console.log('Error parsing JOSN from local storage', e);
      }

    }
  }

  private sortByCreationDateAsc(a:IQuestion,b:IQuestion){
    const keyA = new Date(a.createdAt);
    const keyB = new Date(b.createdAt);
          // Compare the 2 dates
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
  }

  private sortByAnsweredDateAsc(a:IQuestion,b:IQuestion){
    if(!a.answer?.answeredAt || !b.answer?.answeredAt){
      return 0;
    }
    const keyA = new Date(a.answer.answeredAt);
    const keyB = new Date(b.answer.answeredAt);
          // Compare the 2 dates
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
  }

  public retrieveItemsSortByCreation() {
    const questionsFromStorage = this.localService.getData(this.questionsStorageKey);
    if(questionsFromStorage){
      try{
        const parsed = JSON.parse(questionsFromStorage) as IQuestion[]
        parsed.sort(this.sortByCreationDateAsc);
        this.allQuestion.next(parsed);
      } catch (e) {
        console.log('Error parsing JOSN from local storage', e);
      }
    }
  }

  sortByAnswerDateAsc(questions: IQuestion[]): IQuestion[]{
    return questions.sort(this.sortByAnsweredDateAsc);
  }


  public retrieveItems() {
    const questionsFromStorage = this.localService.getData(this.questionsStorageKey);
    if(questionsFromStorage){
      try{
        this.allQuestion.next(JSON.parse(questionsFromStorage) as IQuestion[]);
      } catch (e) {
        console.log('Error parsing JOSN from local storage', e);
      }
    }
  }

  public getItems(): BehaviorSubject<IQuestion[]>{
    return this.allQuestion;
  }

  deleteByTimeStamp(id: string| number){
    const questionsFromStorage = this.localService.getData(this.questionsStorageKey);
    if(questionsFromStorage){
      try{
        let parsed = JSON.parse(questionsFromStorage) as IQuestion[];
        parsed = parsed.filter(savedQuestion => savedQuestion.createdAt != id)
        this.localService.saveData(this.questionsStorageKey,JSON.stringify(parsed))
      } catch (e) {
        console.log('Error parsing JOSN from local storage', e);
      }

    }
  }

  removeAnswer(id: string| number){
  const questionsFromStorage = this.localService.getData(this.questionsStorageKey);
    if(questionsFromStorage){
      try{
        let parsed = JSON.parse(questionsFromStorage) as IQuestion[];
        parsed = parsed.map(savedQuestion => {
          if(savedQuestion.createdAt == id){
            savedQuestion.answer = undefined;
          }
          return savedQuestion;
        })
        this.localService.saveData(this.questionsStorageKey,JSON.stringify(parsed))
      } catch (e) {
        console.log('Error parsing JOSN from local storage', e);
      }

    }
  }

  updateQuestion(question: IQuestion){

    const questionsFromStorage = this.localService.getData(this.questionsStorageKey);
    if(questionsFromStorage){
      try{
        const parsed = JSON.parse(questionsFromStorage) as IQuestion[];
        console.log(question)
        parsed[parsed.findIndex(savedQuestion => savedQuestion.createdAt == question.createdAt)] = question
        this.localService.saveData(this.questionsStorageKey,JSON.stringify(parsed))
      } catch (e) {
        console.log('Error parsing JOSN from local storage', e);
      }

    }
  }

  saveNewQuestion(question: IQuestion){
    const questionsFromStorage = this.localService.getData(this.questionsStorageKey);
    if(questionsFromStorage){
      try{
        const parsed = JSON.parse(questionsFromStorage) as IQuestion[];
        parsed.push(question);
        this.localService.saveData(this.questionsStorageKey,JSON.stringify(parsed))
      } catch (e) {
        console.log('Error parsing JOSN from local storage', e);
      }

    } else {

      this.localService.saveData(this.questionsStorageKey,JSON.stringify([question]))
    }
  }


}

