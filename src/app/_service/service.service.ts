import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  url: string = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<any>(this.url + 'users').pipe(
      map((response) => {
        return response;
      })
    );
  }
}
