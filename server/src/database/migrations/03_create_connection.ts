import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // se o id for alterado na table users tambem sera refletido aqui
            .onUpdate('CASCADE')
            // se o professor for deletado do bd todas as aulas sumirão juntas
            .onDelete('CASCADE');

            // registrando o horario da conexão 
            table.timestamp('create_at')
                .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
                .notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
}