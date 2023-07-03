import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  post = new Post();
  saveOk = false;

  constructor(private postService: PostService) { }

  savePost() {
		this.postService.createPost( this.post).subscribe({
      next: (response) =>  {
        this.saveOk = true; 
        console.log(response)
      },
      error : (error) => console.log(error),
      complete: () => console.log("end subscription")
    });
	}

  setPersonToEdit(post: any) {
		this.post = post;
	}

}
