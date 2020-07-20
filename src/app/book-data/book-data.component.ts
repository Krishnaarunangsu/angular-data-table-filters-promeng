import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
import { SelectItem } from "primeng";




@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.scss']
})
export class BookDataComponent implements OnInit {

  books: Book[];
  cols: any[];
  colLength: number;

  totalRecords: number;

  allAuthors: any[];
  employees: any[];
  portNames: any[];
  selectedEmploye: SelectItem;



  constructor(private bookService: BookService) { 

    this.employees = [
      { label: "Select Employee", value: null },
      { label: "Franc", value: 1 },
      { label: "Kiran", value: 2 },
      { label: "John", value: 3 }
    ];

    this.allAuthors = [

      { label: 'Mario Puzo', value: 'Mario Puzo' },
      { label: 'J.R.R. Tolkien', value: 'J.R.R. Tolkien' },
      { label: 'J.K. Rowling', value: 'J.K. Rowling' },
      { label: 'author1', value: 'author1' },
      { label: 'author2', value: 'author2' },
      { label: 'author3', value: 'author3' }

    ];
  }

  ngOnInit(): void {
    this.bookService.getBooks().then(books =>
      this.books = books);


    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'author', header: 'Author' },
      { field: 'price', header: 'Price' }
    ];


    this.colLength = this.cols.length;
    this.totalRecords = this.books.length;

    


  }

}
