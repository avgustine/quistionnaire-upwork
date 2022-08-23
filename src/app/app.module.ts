import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionManagementPageComponent } from './question-management-page/question-management-page.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import { QuestionCrudeComponent } from './question-crude/question-crude.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { SingleSelectCrudComponent } from './single-select-crud/single-select-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MomentPipe } from './moment.pipe';
import { AngularSplitModule } from 'angular-split';
import { SingleAnswerBodyComponent } from './single-answer-body/single-answer-body.component';
import { MultiAnswerBodyComponent } from './multi-answer-body/multi-answer-body.component';
import { OpenAnswerBodyComponent } from './open-answer-body/open-answer-body.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionManagementPageComponent,
    QuestionCardComponent,
    QuestionsListComponent,
    QuestionCrudeComponent,
    SingleSelectCrudComponent,
    MomentPipe,
    SingleAnswerBodyComponent,
    MultiAnswerBodyComponent,
    OpenAnswerBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    AngularSplitModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
