import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.components.html',
  styleUrl: './post-create.components.css',
})
export class PostCreateComponent {
  enteredValue = 'No Content';
  newPost = 'No Content';

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   this.newPost = postInput.value;
  // }
  onAddPost() {
    console.log(this.enteredValue);
    this.newPost = this.enteredValue;
  }
}
