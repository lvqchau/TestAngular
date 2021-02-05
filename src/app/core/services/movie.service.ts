import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieList(): Movie[] {
    return [
      { id: 1, name: 'Avenger', price: 80000 },
      { id: 2, name: 'Wonder woman', price: 80000 },
      { id: 3, name: 'Iron man', price: 80000 },
    ]
  }

  getMovieListPromise(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve([
          { id: 1, name: 'Avenger', price: 80000 },
          { id: 2, name: 'Wonder woman', price: 80000 },
          { id: 3, name: 'Iron man', price: 80000 },
        ])
      }, 3000)
    })
  }


}
