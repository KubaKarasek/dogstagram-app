import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  public getData(){
    return this.http.get(`${environment.baseUrl}/breeds/list`)
  }

  public getImage(breed: string){
    return this.http.get(`${environment.baseUrl}/breed/${breed}/images/random`)
  }
}
