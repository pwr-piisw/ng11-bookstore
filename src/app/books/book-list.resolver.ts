import {Resolve} from '@angular/router';
import {Book, BooksService} from '../shared/services/books.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class BookListResolver implements Resolve<Book[]> {

  constructor(private readonly booksService: BooksService) {
  }

  resolve(): Observable<Book[]> {
    return this.booksService.getBooks();
  }
}
