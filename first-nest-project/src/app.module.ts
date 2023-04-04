import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { SitesController } from './sites/sites.controller';
import { SitesModule } from './sites/sites.module';

@Module({
  imports: [CatsModule, SitesModule],
})
export class AppModule {}
