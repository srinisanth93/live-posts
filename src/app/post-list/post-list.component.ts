import { Component, OnInit } from '@angular/core';
import { post } from '../post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts:post[]=[]
  constructor(private  postService:PostService) {

  }

  ngOnInit(): void {
    this.listOfPosts=this.postService.getPosts()
    this.postService.listChangeEvent.subscribe((listOfPosts:post[])=>{
      this.listOfPosts=this.postService.getPosts() 
    })
    
  }
}
