import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) 
  { 
    http.get(this.url)
    .subscribe(response=>{
      this.posts = response;
      console.log(response);
    });
  }

  createPost(input: HTMLInputElement)
  {
      let post = { title: input.value }
      this.http.post(this.url, JSON.stringify(post))
      .subscribe(reponse=>
        console.log(reponse)
      );
  }

  updatePost(post: any)
  {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead:true}))
    .subscribe(response=> { console.log(response);
     });
  }

  ngOnInit(): void {
  }

}
