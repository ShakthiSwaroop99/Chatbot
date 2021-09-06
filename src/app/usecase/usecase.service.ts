import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usecase } from '../Model/usecase';

@Injectable({
  providedIn: 'root'
})
export class UsecaseService {
  url :string;
  usecaseRes : usecase

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  
  usecaseValues()
  {
    this.http.get<usecase>(this.url).subscribe(
      response =>{
        console.log(response)
        this.usecaseRes = response
      }
    )
  }
  
}
