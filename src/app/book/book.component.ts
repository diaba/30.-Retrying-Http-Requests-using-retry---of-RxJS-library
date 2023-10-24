import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books!: Book[];
  errorMessage: string = '';
  constructor(private bookService: BookService) {}
  getBooks() {
    this.bookService.getBooks().subscribe(
      (books) => (this.books = books),
      (error) => (this.errorMessage = <any>error)
    );
  }
  addBook(){
    let book:Book={id:2000, name:'test'}
    this.bookService.addBook(book).subscribe(x=> this.errorMessage='success')
  }

  ngOnInit() {
    this.getBooks();
  }
}
