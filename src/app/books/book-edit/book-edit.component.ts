import {Component, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../shared/services/books.service';
import {Subject} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  formGroup: FormGroup;
  titleFormControl: FormControl;
  authorFormControl: FormControl;

  value: Book | null;

  @Input()
  set book(value: Book | null) {
    this.value = value;
    if (value) {
      this.updateFormControls();
    } else {
      this.formGroup.reset();
    }
  }

  @Output()
  bookChanged = new Subject<Book>();

  constructor() {
    this.titleFormControl = new FormControl('', []);
    this.authorFormControl = new FormControl('', []);
    this.formGroup = new FormGroup({
      title: this.titleFormControl,
      author: this.authorFormControl
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    this.bookChanged.next({
      id: this.value.id,
      title: this.titleFormControl.value,
      author: this.authorFormControl.value
    });
  }

  updateFormControls(): void {
    this.titleFormControl.setValue(this.value.title);
    this.authorFormControl.setValue(this.value.author);
  }
}
