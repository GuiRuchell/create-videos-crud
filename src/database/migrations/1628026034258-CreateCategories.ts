import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1628026034258 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                colums: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: "true"
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: "true"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }]
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    } 
}