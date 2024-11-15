import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Users } from "../users/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async register(username: string, password: string): Promise<Users> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.usersRepository.create({ username, password: hashedPassword });
    return this.usersRepository.save(newUser);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload,{
        algorithm:'HS256',
        expiresIn: '1d',
        privateKey:'PZVJXlIsOGMgHpBFX50HHD3201/K1j+zbbokHKs9bjA='
      }),
    };
  }
  decodeToken(authHeader: string) {
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authHeader.replace('Bearer ', '');
    try {
      const {sub} = this.jwtService.verify(token, {
        secret: 'PZVJXlIsOGMgHpBFX50HHD3201/K1j+zbbokHKs9bjA=',
        algorithms: ['HS256'],
      });

      return sub;

    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
