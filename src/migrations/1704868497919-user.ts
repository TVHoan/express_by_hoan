import { MigrationInterface, QueryRunner } from "typeorm";

export class User1704868497919 implements MigrationInterface {
    name = 'User1704868497919'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`permission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_permissions_permission\` (\`userId\` int NOT NULL, \`permissionId\` int NOT NULL, INDEX \`IDX_5b72d197d92b8bafbe7906782e\` (\`userId\`), INDEX \`IDX_c43a6a56e3ef281cbfba9a7745\` (\`permissionId\`), PRIMARY KEY (\`userId\`, \`permissionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_permissions_permission\` ADD CONSTRAINT \`FK_5b72d197d92b8bafbe7906782ec\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_permissions_permission\` ADD CONSTRAINT \`FK_c43a6a56e3ef281cbfba9a77457\` FOREIGN KEY (\`permissionId\`) REFERENCES \`permission\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_permissions_permission\` DROP FOREIGN KEY \`FK_c43a6a56e3ef281cbfba9a77457\``);
        await queryRunner.query(`ALTER TABLE \`user_permissions_permission\` DROP FOREIGN KEY \`FK_5b72d197d92b8bafbe7906782ec\``);
        await queryRunner.query(`DROP INDEX \`IDX_c43a6a56e3ef281cbfba9a7745\` ON \`user_permissions_permission\``);
        await queryRunner.query(`DROP INDEX \`IDX_5b72d197d92b8bafbe7906782e\` ON \`user_permissions_permission\``);
        await queryRunner.query(`DROP TABLE \`user_permissions_permission\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`permission\``);
    }

}
