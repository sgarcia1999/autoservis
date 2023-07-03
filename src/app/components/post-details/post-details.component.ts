import { Component, OnChanges , Input , Output , EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnChanges {

  @Input() saveOk!: boolean;
  @Output() postSeleccionado = new EventEmitter<any>();
  post: Post[] = [];

  constructor(private postService : PostService) { }

  ngOnChanges(): void {
    this.findAllPost();
	}

  findAllPost() {
		this.postService.searchAllPost().subscribe({
      next: (response) => {
        this.post = response;
        console.log(response)
      },
      error : (error) => {console.log(error)}
			})
	}

  editPerson(post: any) {
		this.postSeleccionado.emit(post);
	}

}
