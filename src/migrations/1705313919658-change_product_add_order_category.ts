import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProductAddOrderCategory1705313919658 implements MigrationInterface {
    name = 'ChangeProductAddOrderCategory1705313919658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orderline\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`quantity\` int NOT NULL, \`totalprice\` decimal(10,5) NOT NULL, \`product\` int NOT NULL, \`Order\` int NOT NULL, \`productId\` int NULL, \`orderId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`quantity\` int NOT NULL, \`totalprice\` decimal(10,5) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`category\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`price\` decimal(10,5) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`permission\` ADD UNIQUE INDEX \`IDX_240853a0c3353c25fb12434ad3\` (\`name\`)`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_ff0c0301a95e517153df97f6812\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderline\` ADD CONSTRAINT \`FK_d1dd3fa83a9a60ee84ec01c68d6\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderline\` ADD CONSTRAINT \`FK_cf4e63a17005c1e577c0fd6edf0\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orderline\` DROP FOREIGN KEY \`FK_cf4e63a17005c1e577c0fd6edf0\``);
        await queryRunner.query(`ALTER TABLE \`orderline\` DROP FOREIGN KEY \`FK_d1dd3fa83a9a60ee84ec01c68d6\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_ff0c0301a95e517153df97f6812\``);
        await queryRunner.query(`ALTER TABLE \`permission\` DROP INDEX \`IDX_240853a0c3353c25fb12434ad3\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`categoryId\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`category\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`orderline\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
