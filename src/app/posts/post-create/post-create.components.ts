import { Component, EventEmitter, Output } from '@angular/core';
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

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    alert(post.title);
    this.postCreated.emit(post);
  }
}
