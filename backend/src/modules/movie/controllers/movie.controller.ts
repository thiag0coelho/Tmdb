import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { MovieService } from '../services/movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @Get(':id')
  async get(@Param('id') id: number) {
    try {
      const response = await this.service.get(id);
      return response.data;
    } catch (error) {
      throw new HttpException('There was an error', HttpStatus.BAD_REQUEST);
    }
  }
}
