import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/data"

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.url)
  }
}
