import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1638528061852 implements MigrationInterface {
    name = 'UserMigration1638528061852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "surname"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "surname" character varying NOT NULL`);
    }

}
