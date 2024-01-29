import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mini-social-network';

  storedPosts = [];

  onPostAdded(post: { title: string; content: string }) {
    this.storedPosts.push(post);
  }
}
