import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root', 
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPlayers() {
    return this.http
      .get<Player[]>('assets/mocks/players.json')
      .pipe(delay(1000));
  }
}