import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service'
import { MovieDetail } from '../../core/model/movie.model'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieDetail: MovieDetail | null = null

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //B1: Lấy maPhim từ url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        //B2: Gọi api
        this.movieService.getMovieDetail(params.movieId).subscribe({
          next: (result) => {
            console.log(result)
          },
          error: (error) => {
            console.log(error)
          }
        })
      }
    })
  }

}
