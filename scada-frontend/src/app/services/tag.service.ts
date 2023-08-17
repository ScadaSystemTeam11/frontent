import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  api : string = `${environment.api}/tag`


  constructor(private http: HttpClient) {}

  getActiveInputs(){
    return this.http.get<Tag[]>(this.api + '/ActiveInputs')
  }
}
