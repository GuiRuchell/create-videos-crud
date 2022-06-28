import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("videos")
export class Category {

    @PrimaryColumn
    id: string;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    duration: number;

    @Column
    category_id: string

    @ManyToOne(()=> Category)
    @JoinColumn({name: "category_id"})
    category: Category;

    @CreateDateColumn
    created_at: Date;

    constructor() {
        if (!this.id) {
        this.id = uuid()
        }
    }
}