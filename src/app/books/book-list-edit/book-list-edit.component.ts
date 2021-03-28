import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book, BooksService} from '../../shared/services/books.service';

@Component({
  selector: 'app-book-list-edit',
  templateUrl: './book-list-edit.component.html',
  styleUrls: ['./book-list-edit.component.scss']
})
export class BookListEditComponent implements OnInit {

  books: Book[];

  selectedBook: Book | null = null;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly booksService: BooksService) {
    this.books = activatedRoute.snapshot.data.books;
  }

  ngOnInit(): void {
  }

  saveBook(book: Book): void {
    this.booksService.updateBook(book);
    this.selectedBook = null;
    this.booksService.getBooks().subscribe(value => this.books = value);
  }
}
