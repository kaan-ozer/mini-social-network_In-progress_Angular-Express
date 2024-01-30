import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit, OnDestroy {
  /* 

  ANOTHER WAY OF GETTING DATA FROM THE PARENT COMPONENT

  posts = [
      { title: 'First Post', content: "This is the first post's content" },
      { title: 'Second Post', content: "This is the second post's content" },
      { title: 'Third Post', content: "This is the third post's content" },
    ];

   @Input() posts: Post[] = [];
  
  */

  posts: Post[] = [];

  //We need to keep this subscription to be able to unsub later.
  private postsSub: Subscription;

  //Service is injected
  constructor(public postService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });

    /* 
    
    subscription takes three arguments 
    1-) function which gets executed whenever new data is emitted.
    2-) The second argument will be called, an error is emitted, which will never happen here.
    3-) function that is called whenever the observable completed if whenever there are no more values to be expected. This will  also never be the case here. This is an infinitely living subject. We can always create new posts.

    */
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
    //this will remove the subscription and prevent memory leaks
  }
}
