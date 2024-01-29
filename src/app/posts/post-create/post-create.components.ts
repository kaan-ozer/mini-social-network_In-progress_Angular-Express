import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';

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

  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content,
    };
    alert(post.title);
    this.postCreated.emit(post);
  }
}
