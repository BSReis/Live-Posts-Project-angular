import { Injectable } from '@angular/core';
import { Post } from './post.module';

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      'description xpto1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufaBn_Wyc44BFf7zbpO3P7Ol7iQxQtYxrMQ&usqp=CAU',
      'antonio1@test.com',
      new Date()
    ),
    new Post(
      'Hampi',
      'description xpto2',
      'https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg',
      'antonio2@test.com',
      new Date()
    ),
    new Post(
      'Tuga',
      'description xpto3',
      'https://www.publicdomainpictures.net/pictures/340000/nahled/tree-landscape-15888437090pj.jpg',
      'antonio3@test.com',
      new Date()
    ),
  ];

  getPost() {
    return this.listOfPosts;
  }
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }
}
