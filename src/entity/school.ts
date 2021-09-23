import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, Index } from "typeorm";
import { Admin } from './admin';
import { Post } from './post';
import { Subs } from './subs';

@Entity("school", { schema: "newspeed" })
export class School {
    @PrimaryGeneratedColumn({ type: "int" })
    idx: number;

    @Index()
    @Column({ type: "varchar"})
    name: string;

    @Index()
    @Column({ type: "varchar"})
    region: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Admin, admin => admin.schoolIdx)
    @JoinColumn({ name: "adminIdx"})
    adminIdx: Admin;

    @OneToMany(() => Post, posts => posts.schoolIdx)
    posts: Post[];

    @OneToMany(() => Subs, subs => subs.schoolIdx)
    subs: Subs[];
}