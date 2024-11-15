import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Public } from '../../common/decorators/public.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';

@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly authService: AuthService,
  ) {}

  @Public()
  @UseGuards(JwtAuthGuard)
  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto, @Req() req: any) {
    const userId = this.authService.decodeToken(req.headers.authorization.split(' ')[1]);

    if (!userId) {
      throw new Error('User ID not found');
    }

    createArticleDto.id_user = userId;

    const newArticle = this.articlesService.create(createArticleDto);

    if (!newArticle) return JSON.stringify({ message: 'Artice no created' });

    return newArticle;
  }

  @Public()
  @Get()
  async findAll() {
    try {
      return this.articlesService.findAll();
    } catch (error) {
      console.log(error);
      return JSON.stringify({ message: 'Error in the server' });
    }
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
