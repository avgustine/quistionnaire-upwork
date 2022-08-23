import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectCrudComponent } from './single-select-crud.component';

describe('SingleSelectCrudComponent', () => {
  let component: SingleSelectCrudComponent;
  let fixture: ComponentFixture<SingleSelectCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSelectCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSelectCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
