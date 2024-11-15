import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Articles } from "../../articles/entities/article.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Articles, (articles) => articles.users)
  articles?: Articles[];
}