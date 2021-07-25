import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { post } from '../post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?:post;
  @Input() index:number=0;
  constructor(private  postService:PostService,private router:Router) { }

  ngOnInit(): void {
   
  }
 onDelete(){
    this.postService.deletePost(this.index)
 }
 OnEdit(){
   console.log("works")
 this.router.navigate(["/post-edit",this.index])
 }
 getLike(){
   this.postService.likePost(this.index)
 }
}
