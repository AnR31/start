import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[] = [];
  bodyVisible: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get<any[]>(this.url)
      .subscribe(response => response.forEach(value => {
        this.posts.push(value)
      }))
  }

  onTitleClick() {
    console.log('omg');
    this.bodyVisible = !this.bodyVisible;
  }

  onAuthorClick(userId: any) {
    
  }
}
