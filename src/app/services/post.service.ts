import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { POSTS } from './mock-data';

@Injectable()
export class PostService {

 constructor() { }

 getPosts(): Promise<Post[]> {
   return Promise.resolve(POSTS);
 }

}
