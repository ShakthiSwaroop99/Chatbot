import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { intent } from '../Model/intent';
import { Observable } from 'rxjs';
import { url } from 'inspector';


// const httpOptionsjson = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// }

@Injectable({
  providedIn: 'root'
})


export class IntentService {
  url :string;
  intentVal :intent

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  intentValues()
  {
    this.http.get<intent>(this.url).subscribe(
      response =>{
        console.log(response)
        this.intentVal = response
      }
    )
  }
}


