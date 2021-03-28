import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookListEditComponent} from './book-list-edit/book-list-edit.component';
import {MatModule} from '../mat-module';
import {SharedModule} from '../shared/shared.module';
import {BookListResolver} from './book-list.resolver';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [BookEditComponent, BookListEditComponent],
  imports: [
    CommonModule,
    MatModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BookEditComponent,
    BookListEditComponent
  ],
  providers: [
    BookListResolver
  ]
})
export class BooksModule {
}
