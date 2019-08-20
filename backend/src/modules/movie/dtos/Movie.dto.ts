export class MovieDto {
  constructor(
    public id: string,
    public original_title: string,
    public overview: string,
    public poster_path: string,
    public backdrop_path: string,
    public release_date: string,
    public genres: string,
  ) {}
}
