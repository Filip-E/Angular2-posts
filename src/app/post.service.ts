import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Post } from './post';
@Injectable()
export class PostService {

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
   	 let url = `http://jsonplaceholder.typicode.com/posts`;

     return this.http.get<Post[]>(url);
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
   	 let url = `http://jsonplaceholder.typicode.com/post/${this.index}/comments`;

     return this.http.get<Comment[]>(url);
   }
}
