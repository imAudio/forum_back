import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "../../users/entities/user.entity";

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column('int', { name: 'id_user' })
  id_user: number;

  @ManyToOne(() => Users, (users) => users.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'id_user' })
  users: Users;
}