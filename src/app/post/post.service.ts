import { EventEmitter, Injectable } from "@angular/core";
import { post } from "../post.model";

@Injectable({providedIn:'root'})
export class PostService{   
  listChangeEvent:EventEmitter<post[]>=new EventEmitter();
    listOfPosts: post[] = [
        // new post('Nature ',
        // 'Nature, in the broadest sense, is the natural, physical, material world or universe. Nature can refer to the phenomena of the physical world, and also to life in general. ',
        // 'https://indiaeducationdiary.in/wp-content/uploads/2021/05/alberta-2297204_1920.jpg',
        // 'abc@.com',
        // new Date(),5),
        // new post('Tiger',
        // 'The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes ',
        // 'https://c402277.ssl.cf1.rackcdn.com/photos/18134/images/hero_small/Medium_WW226365.jpg?1574452099',
        // '123@.com',
        // new Date(),6),
        // new post('Clouds',
        // 'n meteorology, a cloud is an aerosol consisting of a visible mass of minute liquid droplets, frozen crystals, or other particles suspended in the atmosphere  ',
        // 'https://cdn.solace.com/wp-content/uploads/2019/01/bg-clouds.jpg',
        // 'xyz@.com',
        // new Date(),1),
      ];
    //   facility
      getPosts(){
          return this.listOfPosts
      }
      deletePost(index:number){
          this.listOfPosts.splice(index,1)
      }
      addPost(post:post){
          this.listOfPosts.push(post)
      }
      updatepost(index:number,post:post){
          this.listOfPosts[index]=post;
      }

      getEdit(index:number){
        return  this.listOfPosts[index]
      }

      likePost(index:number){
        this.listOfPosts[index].noOfLikes+=1;
      }
      setPosts(listOfPosts:post[])
      {
        this.listOfPosts=listOfPosts
        this.listChangeEvent.emit(listOfPosts);
      }
}