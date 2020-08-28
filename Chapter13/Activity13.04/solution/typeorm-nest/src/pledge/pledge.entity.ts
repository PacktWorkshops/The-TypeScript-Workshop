import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pledge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desc: string;

  @Column()
  kept: boolean;
}
