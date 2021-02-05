import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service'
import { MovieDetail } from '../../core/model/movie.model'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}
