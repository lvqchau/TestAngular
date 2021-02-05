import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieList() {
    return [
      { id: 1, name: 'Avenger', price: 80000 },
      { id: 2, name: 'Wonder woman', price: 80000 },
      { id: 3, name: 'Iron man', price: 80000 },
    ]
  }
}
