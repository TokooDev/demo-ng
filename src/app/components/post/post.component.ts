import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  posts: Post[]= [];

 constructor(private dataService: PostService) { }

 ngOnInit(): void {
   this.dataService.getPosts().then((data) => this.posts = data);
 }


}
