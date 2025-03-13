import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('suggestions')
export class Suggestion {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    suggestion: string;

    @Column()
    description: string;
    
}
