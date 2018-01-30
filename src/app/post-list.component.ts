import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from './post';
import { Comment } from './comment';
import { PostService }  from './post.service';

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {
   @Output() commentsFound = new EventEmitter();
   
   posts: Post[];
   comments: Comment[];
   	
   constructor(private postService: PostService) {}

   ngOnInit(): void {
   	this.postService.getAllPosts().subscribe(data => this.posts = data);
   }

   getComments(index: number): void {
   	this.postService.getCommentsForPost(++index)
   		.subscribe(data => 
   			this.comments = data; 
   			this.printComments(this.comments);
   		);
   }

   printComments(comments: Comment[]): void {
   console.log("All the names of Comments:");
   	 for (var i = 0; i < comments.length; i++) {
         console.log(comments[i].name);
      }
   }
}
