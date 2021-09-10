import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from "typeorm";
import { Subs } from './subs';

@Entity("student", { schema: "newspeed" })
export class Student {
    @PrimaryGeneratedColumn({ type: "int" })
    idx: number;

    @Index()
    @Column({ type: "varchar", length: 256 })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Subs, subs => subs.studentIdx)
    subs: Subs[];

}