import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.components.html',
  styleUrl: './post-create.components.css',
})
export class PostCreateComponent {
  onAddPost() {
    alert('Post added!');
  }
}
