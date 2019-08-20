import { Injectable, HttpService } from '@nestjs/common';
import { TMDB_API_ENDPOINT, TMDB_API_KEY } from '../../../constants';
import { map } from 'rxjs/operators';
import { MovieAdapter } from '../adapters/Movie.adapter';
import { GenreAdapter } from '../adapters/Genre.adapter';
import { MovieDto } from '../dtos/Movie.dto';
import { GenreDto } from '../dtos/Genre.dto';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  private genres: Promise<GenreDto[]>;
  constructor(private readonly httpService: HttpService) {
    this.genres = this.getAllGenres();
  }

  get(id: number): Promise<any> {
    const url = `${TMDB_API_ENDPOINT}movie/${id}?api_key=${TMDB_API_KEY}`;

    return this.httpService.get(url).toPromise();
  }

  getUpcomingMovies(page: number): Observable<Promise<MovieDto[]>> {
    const url = `${TMDB_API_ENDPOINT}movie/upcoming?api_key=${TMDB_API_KEY}&page=${page}`;
    const result = this.httpService
      .get(url)
      .pipe(
        map(response =>
          new MovieAdapter(response.data.results, this.genres).adapt(),
        ),
      );

    return result;
  }

  searchByName(page: number, name: string): Observable<Promise<MovieDto[]>> {
    const url = `${TMDB_API_ENDPOINT}search/movie?api_key=${TMDB_API_KEY}&page=${page}&query=${name}&include_adult=false`;
    const result = this.httpService
      .get(url)
      .pipe(
        map(response =>
          new MovieAdapter(response.data.results, this.genres).adapt(),
        ),
      );

    return result;
  }

  getAllGenres(): Promise<GenreDto[]> {
    const url = `${TMDB_API_ENDPOINT}genre/movie/list?api_key=${TMDB_API_KEY}`;
    const result = this.httpService
      .get(url)
      .pipe(map(response => new GenreAdapter(response.data.genres).adapt()));

    return result.toPromise();
  }
}
