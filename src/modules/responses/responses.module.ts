import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../users/entities/user.entity";
import { Responses } from "./entities/response.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Responses])],
  exports: [TypeOrmModule],
  controllers: [ResponsesController],
  providers: [ResponsesService],
})
export class ResponsesModule {}
