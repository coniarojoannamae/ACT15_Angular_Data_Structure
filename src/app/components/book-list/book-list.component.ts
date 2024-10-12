import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: { title: string, author: string, genre: string }[] = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: 'The Complete Guide to Angular', author: ' Felipe Coury, Carlos Taborda, Ari Lerner, Nate Murray', genre: 'TechnologyProgramming' },
  ];
  newBook = { title: '', author: '', genre: '' };
  addBook() {
    if (this.newBook.title.trim() && this.newBook.author.trim() && this.newBook.genre.trim()) {
      this.books.push({ ...this.newBook });
      this.newBook = { title: '', author: '', genre: '' }; // Reset the form
    }
  }
  removeBook(bookTitle: string) {
    this.books = this.books.filter(book => book.title !== bookTitle);
  }

}
