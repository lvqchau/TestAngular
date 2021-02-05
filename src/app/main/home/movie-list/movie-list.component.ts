import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/model/movie.model';
import { MovieService } from '../../../core/services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = []
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.movieList = this.movieService.getMovieList()
    // console.log(this.movieList)

    // this.movieService.getMovieListPromise()
    //   .then((result) => {
    //     this.movieList = result
    //     console.log(this.movieList)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    this.movieService.getMovieList().subscribe({
      // Khi nhận kết quả
      next: result => {
        this.movieList = result
        console.log(this.movieList)
      },
      // Khi nhận lỗi
      error: error => {
        console.log(error)
      },

      // Khi kết thúc
      complete: () => {
        console.log("DONE")
      }
    })
  }

}
