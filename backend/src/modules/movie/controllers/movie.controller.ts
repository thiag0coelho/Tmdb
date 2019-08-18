import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
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
      throw new HttpException(error.status_message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/upcoming/:page')
  async getUpcomingMovies(@Param('page') page: number) {
    try {
      const response = await this.service.getUpcomingMovies(page);

      return response.data;
    } catch (error) {
      throw new HttpException(error.status_message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('search/:page/:name')
  async searchByName(
    @Param('page') page: number = 1,
    @Param('name') name: string,
  ) {
    try {
      const response = await this.service.searchByName(page, name);

      return response.data;
    } catch (error) {
      throw new HttpException(error.status_message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('genres')
  async getGenres() {
    try {
      const response = await this.service.getAllGenres();

      return response.data;
    } catch (error) {
      throw new HttpException(error.status_message, HttpStatus.BAD_REQUEST);
    }
  }
}
