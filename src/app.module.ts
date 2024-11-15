import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { UsersService } from "./modules/users/users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './modules/users/users.module';
import { Users } from './modules/users/entities/user.entity';
import { JwtAuthGuard } from "./modules/auth/jwt-auth.guard";
import { ArticlesModule } from './modules/articles/articles.module';
import { ResponsesModule } from './modules/responses/responses.module';


@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '51.91.150.152',
      port: 3306,
      username: 'root',
      password: 'loukas30',
      database: 'forum_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['dist/src/migrations/*.js'],
      synchronize: true,
    }),
    UsersModule,
    ArticlesModule,
    ResponsesModule
  ],
  providers: [{provide:'APP_GUARD', useClass: JwtAuthGuard}],
})
export class AppModule {}
