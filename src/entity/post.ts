import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from "typeorm";
import { School } from './school';
import { Admin } from './admin';

@Entity("post", { schema: "newspeed" })
export class Post {
    @PrimaryGeneratedColumn({ type: "int" })
    idx: number;

    @ManyToOne(
        () => School,
        (school) => school.posts
    )
    @JoinColumn({ name: "schoolIdx" })
    schoolIdx: School;

    @ManyToOne(
        () => Admin,
        (admin) => admin.posts
    )
    @JoinColumn({ name: "adminIdx" })
    adminIdx: Admin;

    @Index()
    @Column({ type: "varchar", length: 512})
    subject: string;

    @Column({ type: "text"})
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}