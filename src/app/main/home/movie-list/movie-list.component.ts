import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../core/services/movie.service.ts';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList: any[] = []
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieList = this.movieService.getMovieList()
    console.log(this.movieList)
  }

}
