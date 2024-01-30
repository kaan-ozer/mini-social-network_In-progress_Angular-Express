import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.components.html',
  styleUrl: './post-create.components.css',
})
export class PostCreateComponent {
  enteredTitle = 'No Content';
  enteredContent = 'No Content';
  newPost = 'No Content';

  /*

    Another way of giving data to parent component by using event emitter. 

    @Output() postCreated = new EventEmitter<Post>();
    
  
    Getting form data by using local reference

    onAddPost(postInput: HTMLTextAreaElement) {
        this.newPost = postInput.value;
    }

  */

  // Service is injected
  constructor(public postsService: PostsService) {}

  //check if form is valid
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    /*
      Create a post with data comes from form by using local reference

      const post: Post = {
        title: form.value.title,
        content: form.value.content,
      };
      alert(post.title);

      // emit created post to be make this post accessible from parent component
      this.postCreated.emit(post);

    */

    this.postsService.addPost(form.value.title, form.value.content);

    form.resetForm();
  }
}
