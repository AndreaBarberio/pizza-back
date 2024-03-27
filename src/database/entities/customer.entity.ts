// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { Priority, Status } from "src/customers/enums";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: Priority,
        default: Priority.LOW,
    })
    priority: Priority

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.PENDING,
    })
    status: Status;

    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    telephone: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}



// export class Customer {
//     id: number;
//     name: string;
//     surname: string;
//     email: string;
//     telephone: number;
//     priority: Priority;
//     status: Status;
//     createdAt: Date;
//     updatedAt: Date;
// }