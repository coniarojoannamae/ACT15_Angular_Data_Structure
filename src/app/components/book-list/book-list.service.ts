import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: { title: string; author: string; genre: string }[] = [
    { title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
  ];

  // Get the list of books
  getBooks() {
    return [...this.books]; // Return a copy to avoid direct modification
  }

  // Add a new book
  addBook(book: { title: string; author: string; genre: string }) {
    this.books.push(book);
  }

  // Remove a book by title
  removeBook(title: string) {
    this.books = this.books.filter(book => book.title !== title);
  }
}
