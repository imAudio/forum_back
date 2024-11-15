// src/modules/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../users/entities/user.entity";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      signOptions:{
        expiresIn: '1d',
        algorithm: 'HS256',
      }
    }),
  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [AuthService, JwtService],
})

export class AuthModule {}
