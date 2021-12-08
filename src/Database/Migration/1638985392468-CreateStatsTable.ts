import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateStatsTable1638985392468 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user_stats',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
        },
        {
          name: 'user_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'matchs',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'answer_questions',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'prizee',
          type: 'float',
          isNullable: false,
        },
        {
          name: 'defeats',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'wins',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'deleted_at',
          type: 'timestamp',
          default: null,
        },
      ],
    }));
    await queryRunner.createForeignKey(
      'user_stats',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('user_stats', 'user_id');
    await queryRunner.dropTable('user_stats');
  }
}
