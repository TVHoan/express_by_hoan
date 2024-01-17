import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntity1705378298702 implements MigrationInterface {
    name = 'UpdateEntity1705378298702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orderline\` DROP COLUMN \`Order\``);
        await queryRunner.query(`ALTER TABLE \`orderline\` DROP COLUMN \`product\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orderline\` ADD \`product\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`orderline\` ADD \`Order\` int NOT NULL`);
    }

}
