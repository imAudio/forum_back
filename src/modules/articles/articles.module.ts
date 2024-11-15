import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";
import { UsersController } from "../users/users.controller";
import { Articles } from "./entities/article.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([Articles]),AuthModule],
  exports: [TypeOrmModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})

export class ArticlesModule {}