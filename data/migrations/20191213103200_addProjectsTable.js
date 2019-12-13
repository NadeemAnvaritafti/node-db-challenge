
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 75)
            .notNullable()
            .unique();
        tbl.text('description', 255);
        tbl.boolean('completed')
            .defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 255)
            .notNullable();
        tbl.text('notes', 255);
        tbl.boolean('completed')
            .defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 75)
            .notNullable()
            .unique();
        tbl.text('description', 255);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('projectResources', tbl => {
        tbl.primary(['project_id', 'resource_id']);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projectResources")
};
