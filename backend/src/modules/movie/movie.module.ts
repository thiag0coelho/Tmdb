import { Module, HttpModule } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { MovieController } from './controllers/movie.controller';

@Module({
  imports: [HttpModule],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
