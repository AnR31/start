import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params} from "@angular/router";
import {GetUserService} from "../get-user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, DoCheck {

  url = 'https://jsonplaceholder.typicode.com/users';
  users: any[] = [];
  userId;
  userData;

  constructor(private route: ActivatedRoute, private http: HttpClient, private myserv: GetUserService) {
  }
// директивы
  ngOnInit(): void {
    let typedSnap: Params = this.route.snapshot.params;
    this.userId = typedSnap.user;
    this.userData = this.doRequest(this.userId);
  }

  ngDoCheck(): void {
    let newUserId = this.route.snapshot.params.user;
    if (this.userId != newUserId) {
      this.doRequest(this.userId);
      this.userId = newUserId
    }
  }

  doRequest(userId) {
    this.myserv.doRequest().subscribe(response => response.forEach(value => { if (value.id == userId) { this.userData = value; }}))
  }
}
