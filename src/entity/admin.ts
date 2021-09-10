import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, Index } from "typeorm";
import { School } from './school';
import { Post } from './post';

@Entity("admin", { schema: "newspeed" })
export class Admin {
    @PrimaryGeneratedColumn({ type: "int" })
    idx: number;

    @Index()
    @Column({ type: "varchar", length: 256 })
    name: string;

    @OneToOne(() => School, (school) => school.adminIdx)
    schoolIdx: School;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Post, post => post.adminIdx)
    posts: Post[];
}