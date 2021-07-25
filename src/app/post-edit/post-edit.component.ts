import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { post } from '../post.model';

import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
 form!:FormGroup;
 index:number=0;
 editMode:boolean=  false;
 

  constructor(private postService:PostService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
   let title=''
   let description=''
   let imagepath=''

    this.route.params.subscribe((params:Params)=>{
      if(params['index'])
      {
        this.index=params['index']
      
      
      const post =this.postService.getEdit(this.index)
      title=post.title
      description=post.description
      imagepath=post.imagepath
      this.editMode=true
      }
      })

    this.form=new FormGroup({
      title:new FormControl(title,[Validators.required]),
      description:new FormControl(description,[Validators.required]),
      imagepath:new FormControl(imagepath,[Validators.required])
    });
    
    
  }
  onSubmit(){
   const title=this.form.value.title;
   const description=this.form.value.description;
   const imagepath=this.form.value.imagepath;

   const pos :post =new post(title,description,imagepath,'sri@',new Date(),1);
   if(this.editMode){
    this.postService.updatepost(this.index ,pos)

   }
   else{
    this.postService.addPost(pos)

   }

   
  this.router.navigate(["/post-list"])
  }



  

}
