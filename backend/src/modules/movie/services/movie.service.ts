import { Injectable, HttpService } from '@nestjs/common';
import { TMDB_API_ENDPOINT, TMDB_API_KEY } from '../../../constants';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  get(id: number) {
    const url = `${TMDB_API_ENDPOINT}movie/${id}?api_key=${TMDB_API_KEY}`;

    return this.httpService.get(url).toPromise();
  }

  getUpcomingMovies(page: number) {
    const url = `${TMDB_API_ENDPOINT}movie/upcoming?api_key=${TMDB_API_KEY}&page=${page}`;

    return this.httpService.get(url).toPromise();
  }
}
