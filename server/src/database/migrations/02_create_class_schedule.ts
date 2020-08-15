import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            // se o id for alterado na table users tambem sera refletido aqui
            .onUpdate('CASCADE')
            // se o professor for deletado do bd todas as aulas sumirão juntas
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule')
}