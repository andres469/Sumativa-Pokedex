import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  private apiUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  getPokemon(id: string): Observable<any> {
    return this.http.get(this.apiUrl + "pokemon/" + id);
  }
  
}
