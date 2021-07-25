import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from './post.model';
import { PostService } from './post/post.service';
import { tap } from 'rxjs/operators';

// https://live-posts-51f95-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //fun 1 to save
  saveData() {
    // step -1 get listOfpost from post.service
    const listOfPosts: post[] = this.postService.getPosts();
    // step -2 save
    this.http
      .put(
        'https://live-posts-51f95-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
    //console.log("Backend")
  }

  //fun 2 to fetch
  fetchData() {
    //send list of posts to post services
    this.http
      .get<post[]>(
        'https://live-posts-51f95-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: post[]) => {
          console.log(listOfPosts);
          this.postService.setPosts(listOfPosts)
        })
      )
      .subscribe();
  }
}
