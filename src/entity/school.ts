import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Admin } from './admin';
import { Post } from './post';
import { Subs } from './subs';

@Entity("school", { schema: "newspeed" })
export class School {
  @PrimaryGeneratedColumn({ type: "int" })
  idx: number;

  @Column({ type: "varchar", length: 256 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Admin, admin => admin.schoolIdx)
  admins: Admin[];

  @OneToMany(() => Post, post => post.schoolIdx)
  posts: Post[];

  @OneToMany(() => Subs, subs => subs.schoolIdx)
  subs: Subs[];
}