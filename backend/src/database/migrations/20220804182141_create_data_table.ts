import { Knex } from "knex";
import { EVENT_TABLE } from "../../configs/tables";

export async function up(knex: Knex): Promise<void> {
  const { TABLE_NAME, COLUMN_NAMES } = EVENT_TABLE;
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements(COLUMN_NAMES.ID).notNullable().unique();
    table.text(COLUMN_NAMES.OWNER).notNullable();
    table.text(COLUMN_NAMES.TITLE).notNullable();
    table.text(COLUMN_NAMES.MESSAGE).notNullable();
    table
      .timestamp(COLUMN_NAMES.CREATION_TIME)
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
  });
}

export async function down(knex: Knex): Promise<void> {
  const { TABLE_NAME } = EVENT_TABLE;
  return knex.schema.dropTable(TABLE_NAME);
}
