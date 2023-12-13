import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'http://localhost:3000/';
  deleteUrl = 'http://localhost:3000/posts/';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl + 'posts');
  }

  getComments(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl +'comments');
  }

  getProfile(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl + 'profile');
  }

  deletePost(id: any) {
    this.httpClient.delete(this.deleteUrl + `${id}`);
  }
}
