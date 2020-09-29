import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/users/';
  users: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get<any[]>(this.url)
      .subscribe(response => response.forEach(value => {
        this.users.push(value)
      }))
  }

}
