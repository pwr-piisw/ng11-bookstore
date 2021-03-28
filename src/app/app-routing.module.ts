import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {BookListEditComponent} from './books/book-list-edit/book-list-edit.component';
import {BookListResolver} from './books/book-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'books/edit',
    component: BookListEditComponent,
    resolve: {
      books: BookListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
