import { Observable } from 'rxjs';
import { UpcomingMovieDto } from '../dtos/UpcomingMovie.dto';
import { GenreDto } from '../dtos/Genre.dto';

export class UpcomingMovieAdapter {
  private readonly movies: UpcomingMovieDto[] = [];

  constructor(
    private readonly list: Observable<any>,
    private readonly genres: Promise<GenreDto[]>,
  ) {}

  async adapt(): Promise<UpcomingMovieDto[]> {
    const genreList = await this.genres;

    this.list.forEach(item => {
      const movieGenres = genreList.filter(genre => {
        return item.genre_ids.includes(genre.id);
      });

      this.movies.push(
        new UpcomingMovieDto(
          item.id,
          item.original_title,
          item.overview,
          item.poster_path,
          item.backdrop_path,
          item.release_date,
          movieGenres.map(x => x.name).join(', '),
        ),
      );
    });

    return this.movies;
  }
}
