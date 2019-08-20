import { Observable } from 'rxjs';
import { GenreDto } from '../dtos/Genre.dto';

export class GenreAdapter {
  private readonly items: GenreDto[] = [];

  constructor(private readonly list: Observable<any>) {}

  adapt(): GenreDto[] {
    this.list.forEach(item => {
      this.items.push(new GenreDto(item.id, item.name));
    });

    return this.items;
  }
}
