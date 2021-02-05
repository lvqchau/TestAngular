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

    this.movieService.getMovieListObservable().subscribe(
      (result) => {
        this.movieList = result
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
