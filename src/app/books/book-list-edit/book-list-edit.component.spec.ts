import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListEditComponent } from './book-list-edit.component';

describe('BookListEditComponent', () => {
  let component: BookListEditComponent;
  let fixture: ComponentFixture<BookListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
