import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { Articles } from "./entities/article.entity";


@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private articleRepository: Repository<Articles>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.save(this.articleRepository.create(createArticleDto));
  }

  findAll() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOne({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updats a #${id} article`;
  }

  remove(id: number) {
    return `This action res a #${id} article`;
  }
}
