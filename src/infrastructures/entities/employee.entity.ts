import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Định nghĩa enum trong TypeScript
export enum Gender {
  Male = 'M',
  Female = 'F',
}

@Entity() // Declares the class as an entity
export class Employee {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  id: bigint;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ type: 'varchar', length: 14 })
  firstName: string;

  @Column({ type: 'varchar', length: 16 })
  lastName: string;

  @Column({ type: 'enum', enum: Gender, name: 'gender' })
  gender: Gender; // Ánh xạ enum với cột gender
}
