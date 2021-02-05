import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';

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

  //Promise
  getMovieListPromise(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        // resolve([
        //   { id: 1, name: 'Avenger', price: 80000 },
        //   { id: 2, name: 'Wonder woman', price: 80000 },
        //   { id: 3, name: 'Iron man', price: 80000 },
        // ])

        reject("Lỗi rồi")
      }, 3000)
    })
  }
  
  //Observable
  getMovieListObservable(): Observable<Movie[]> {
    return new Observable((subscribe) => {
      setTimeout(() => {
        subscribe.next([
          { id: 1, name: 'Avenger', price: 80000 },
          { id: 2, name: 'Wonder woman', price: 80000 },
          { id: 3, name: 'Iron man', price: 80000 },
        ]);
        // Để kết thúc observable thì .complete()
        // Muốn gọi để trả về data thì phải .next(trả về kết quả/result)
        subscribe.complete()
      }, 3000);
    });
  }
  


}
