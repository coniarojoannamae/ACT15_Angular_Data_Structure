import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Book } from './book.model';
import { BookService } from  './book-list.service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books: { title: string; author: string; genre: string }[] = [];
  newBook = { title: '', author: '', genre: '' };

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  // Load books from the service
  loadBooks() {
    this.books = this.bookService.getBooks();
  }

  // Add a new book
  addBook() {
    if (this.newBook.title.trim() && this.newBook.author.trim() && this.newBook.genre.trim()) {
      this.bookService.addBook({ ...this.newBook });
      this.newBook = { title: '', author: '', genre: '' }; // Reset form fields
      this.loadBooks(); // Refresh the book list
    }
  }

  // Remove a book
  removeBook(title: string) {
    this.bookService.removeBook(title);
    this.loadBooks(); // Refresh the book list
  }
}