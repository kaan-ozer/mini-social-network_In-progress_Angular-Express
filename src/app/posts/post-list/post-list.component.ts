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
  //   posts = [
  //     { title: 'First Post', content: "This is the first post's content" },
  //     { title: 'Second Post', content: "This is the second post's content" },
  //     { title: 'Third Post', content: "This is the third post's content" },
  //   ];

  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });

    //takes three arguments 1-) function which gets executed whenever new data is emitted. The second argument will be called, an error is emitted, which will never happen here.3-)) function that is called whenever the observable completed if whenever there are no more values to be expected. This will   also never be the case here. This is an infinitely living subject. We can always create new posts

    // one more important thing this subscription here actually doesnt cancel whnever this component is teared down now righhtr now this component never disapperes we got only one page we got no way of removing that component from ui but later we will. There will be different pages and we want to ensure that when this component is not part of the DOM the subscriptions that we set up in it. are also not living anymore. Otherwise we create a memory leak so we will actually store that subscription in a new property which will be of types of subscription

    // now we just need to unsubscripe whenever this component is destroyed and there is another lifecycle hook we can use for that
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
    //this will remove the subscription and prevent memory leaks
  }
}
