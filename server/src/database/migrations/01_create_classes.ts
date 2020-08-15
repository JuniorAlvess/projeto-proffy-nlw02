import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // se o id for alterado na table users tambem sera refletido aqui
            .onUpdate('CASCADE')
            // se o professor for deletado do bd todas as aulas sumirão juntas
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}