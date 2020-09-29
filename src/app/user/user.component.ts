import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/users';
  users: any[] = [];
  userId;
  userData;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    let snapshot = this.route.snapshot;
    let snapshotElementElement = snapshot['params']['user'];
    this.userId = snapshotElementElement;
    //console.log(snapshotElementElement);
    let superUsers: any[] = [];
    this.http
      .get<any[]>(this.url)
      .subscribe(response => response.forEach(value => {
        //console.log(value);
        if (value['id'] == snapshotElementElement) {this.userData = value; console.log(value)}
        superUsers.push(value)
      }))
    console.log(superUsers);
    superUsers.forEach(value => {
      console.log('value ' + value)
      if (value.id == this.userId) { this.userData = value}

    })
    console.log(this.userData)
  }

}
