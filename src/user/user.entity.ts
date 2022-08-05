import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;
    
    @Column({default: 'li980819'})
    password: string;

    @Column()
    email: string;

    @Column({default: false})
    isRegisted: boolean;

    // 创建时间
    @Column({default: () => 'CURRENT_TIMESTAMP'})
    createTime: Date;

    // 更新时间
    @Column({default: () => 'CURRENT_TIMESTAMP'})
    updateTime: Date;
}