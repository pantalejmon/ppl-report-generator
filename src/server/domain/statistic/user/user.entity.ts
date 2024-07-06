import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    username: string;

    @Column()
    fullName: string;

    @Column()
    attempts: number;

    constructor(username: string, fullName: string, attempts: number) {
        this.username = username;
        this.fullName = fullName;
        this.attempts = attempts;
    }

    addAttempt() {
        this.attempts++;
    }
}