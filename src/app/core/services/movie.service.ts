import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // getMovieList(): Movie[] {
  //   return [
  //     { id: 1, name: 'Avenger', price: 80000 },
  //     { id: 2, name: 'Wonder woman', price: 80000 },
  //     { id: 3, name: 'Iron man', price: 80000 },
  //   ]
  // }
  getMovieList(): Observable<Movie[]> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
    return this.http.get<Movie[]>(url)
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

        // Khi Promise resolve thì không reject được nữa
        // Khi Observale trả result xong thì vẫn trả ra lỗi được
        // subscribe.error('Lỗi rồi')

        // Để kết thúc observable thì .complete()
        // Muốn gọi để trả về data thì phải .next(trả về kết quả/result)
        subscribe.complete()
      }, 3000);
    });
  }
  


}
