import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [{
    id: 1,
    title: '2001: A Space Odyssey',
    author: 'Arthur C. Clarke'
  }, {
    id: 2,
    title: 'Blade Runner',
    author: 'Phillip K. Dick'
  }, {
    id: 3,
    title: 'Solaris',
    author: 'Stanislaw Lem'
  }];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  updateBook(book: Book): void {
    this.books = this.books.map(value => value.id === book.id ? {...book} : value);
  }
}
