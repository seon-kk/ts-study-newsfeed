import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { School } from './school';
import { Student } from './student';

@Entity("subs", { schema: "newspeed" })
export class Subs {
    @PrimaryGeneratedColumn({ type: "int" })
    idx: number;

    @ManyToOne(
        () => School,
        (school) => school.subs
    )
    @JoinColumn({ name: "schoolIdx" })
    schoolIdx: School;

    @ManyToOne(
        () => Student,
        (student) => student.subs
    )
    @JoinColumn({ name: "studentIdx" })
    studentIdx: Student;

    @Column({ type: "datetime" })
    startDate: Date;

    @Column({ type: "datetime" })
    endDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}