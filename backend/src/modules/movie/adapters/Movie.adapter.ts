import { Observable } from 'rxjs';
import { MovieDto } from '../dtos/Movie.dto';
import { GenreDto } from '../dtos/Genre.dto';

export class MovieAdapter {
  private readonly movies: MovieDto[] = [];

  constructor(
    private readonly list: Observable<any>,
    private readonly genres: Promise<GenreDto[]>,
  ) {}

  async adapt(): Promise<MovieDto[]> {
    const genreList = await this.genres;

    this.list.forEach(item => {
      const movieGenres = genreList.filter(genre => {
        return item.genre_ids.includes(genre.id);
      });

      this.movies.push(
        new MovieDto(
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
