import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "../../users/entities/user.entity";
import { Articles } from "../../articles/entities/article.entity";

export class Responses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column('int', { name: 'id_user' })
  id_user: number;

  @ManyToOne(() => Users, (users) => users.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'id_user' })
  users: Users;

  @Column('int', { name: 'id_article' })
  id_article: number;

  @ManyToOne(() => Articles, (articles) => articles.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'id_article' })
  articles: Articles;
}
