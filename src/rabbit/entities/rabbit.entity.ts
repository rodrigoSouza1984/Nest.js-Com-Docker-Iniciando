import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rabbit {
    @PrimaryGeneratedColumn()
    id: number;   

    @Column({nullable: true})
    name:string    

    @Column({nullable: true})
    email: string;

}
