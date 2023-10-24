import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
import { retry } from 'rxjs/operators';
@Injectable()
export class BookService {
  private booksUrl = './assets/books.json';
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      this.booksUrl)
    // .pipe(
    //     retry(3));
  }


  addBook(book: Book): Observable<any>{
    return this.http.post<Book>(this.booksUrl, book).pipe(retry(3));
  }
}
