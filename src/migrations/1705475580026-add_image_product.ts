import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImageProduct1705475580026 implements MigrationInterface {
    name = 'AddImageProduct1705475580026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`image\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`image\``);
    }

}
