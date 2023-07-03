import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/environments/endpoints/endpoints';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url_post : string  = endpoints.post_endpoint;

  constructor(private http: HttpClient) { }

  public searchAllPost(): Observable<Post[]> {
		return this.http.get<any[]>(this.url_post);
	}
  public createPost(post: Post): Observable<any> {
    const headers = { 'Content-type': 'application/json; charset=UTF-8'}
		const body = JSON.stringify(post);
		return this.http.post(this.url_post, body, { headers });
	}
}
