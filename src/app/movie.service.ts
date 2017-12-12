import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  constructor(public http: HttpClient) { }

    exists: boolean;
    id: number;
    
//     moviePost() {
//         this.http.post("http://james-winter-2017-phortonssf.c9users.io:8080/api/movies")
//     }
    
//     movieExists() {
//         this.http.get("http://james-winter-2017-phortonssf.c9users.io:8080/api/movies/" + id + "/exists")
//     }
}
