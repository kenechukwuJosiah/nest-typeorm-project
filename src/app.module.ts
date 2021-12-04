import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../ormconfig';
import { Users } from './user.entity';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([Users])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
