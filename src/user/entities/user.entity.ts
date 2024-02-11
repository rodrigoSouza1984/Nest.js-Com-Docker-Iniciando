import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;   

    @Column({nullable: true})
    name:string    

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    password: string;    

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp' })
    deletedAt: Date;

}
