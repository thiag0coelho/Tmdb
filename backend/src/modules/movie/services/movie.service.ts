import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class MovieService {
  constructor(private readonly httpService: HttpService) {}

  get(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`;

    return this.httpService.get(url).toPromise();
  }
}
