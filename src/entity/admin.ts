import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { School } from './school';
import { Post } from './post';

@Entity("admin", { schema: "newspeed" })
export class Admin {
    @PrimaryGeneratedColumn({ type: "int" })
    idx: number;

    @Column({ type: "varchar", length: 256, unique: true })
    user_id: string;

    @Column({ type: "varchar", length: 256 })
    name: string;

    @ManyToOne(
        () => School,
        (school) => school.admins
    )
    @JoinColumn({ name: "schoolIdx" })
    schoolIdx: School;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Post, post => post.adminIdx)
    posts: Post[];
}