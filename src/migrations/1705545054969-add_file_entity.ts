import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFileEntity1705545054969 implements MigrationInterface {
    name = 'AddFileEntity1705545054969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`file\` (\`id\` int NOT NULL AUTO_INCREMENT, \`source\` varchar(255) NOT NULL, \`destination\` varchar(255) NOT NULL, \`ispublic\` tinyint NOT NULL, \`users\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`file\``);
    }

}
