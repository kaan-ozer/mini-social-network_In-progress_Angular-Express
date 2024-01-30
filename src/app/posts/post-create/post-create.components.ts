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

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   this.newPost = postInput.value;
  // }

  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);

    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // alert(post.title);

    // this.postCreated.emit(post);

    form.resetForm();
  }
}
