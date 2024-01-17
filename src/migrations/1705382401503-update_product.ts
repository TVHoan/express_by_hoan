import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProduct1705382401503 implements MigrationInterface {
    name = 'UpdateProduct1705382401503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`image\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`image\``);
    }

}
