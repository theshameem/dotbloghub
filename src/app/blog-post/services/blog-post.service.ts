import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPost } from '../models/blog-post.model';

@Injectable()
export class BlogPostService {
  constructor(private http: HttpClient) {}

  createBlogPost(payload: AddBlogPost): Observable<BlogPost> {
    const url = `${environment.apiBaseUrl}/api/blogposts`;
    return this.http.post<BlogPost>(url, payload);
  }

  getBlogList(): Observable<BlogPost[]> {
    const url = `${environment.apiBaseUrl}/api/blogposts`;

    return this.http.get<BlogPost[]>(url);
  }
}
