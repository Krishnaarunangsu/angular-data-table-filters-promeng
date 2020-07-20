import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface Book{
  name: string;
  price;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  /*
  Service Definition Method
  */
 getBooks(){
   return this.httpClient.get<any>('assets/books.json')
   .toPromise()
   .then(res => <Book[]>res.data)
   .then(data =>{
     return data;
   });
 }
}
