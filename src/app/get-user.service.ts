import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  doRequest() {
    return this.http.get<any[]>(this.url);
  }
}
