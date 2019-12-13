
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Buy paint', notes: 'buy bear brand', completed: false, project_id: 1},
        {id: 2, description: 'Buy roller', notes: 'maybe get two rollers if possible', completed: false, project_id: 1},
        {id: 3, description: 'Paint room', notes: 'ask owner which color', completed: false, project_id: 1},
        {id: 4, description: 'Take photo', notes: 'use iphone', completed: false, project_id: 1},
        {id: 5, description: 'Learn JS', notes: 'use lambda resources', completed: false, project_id: 2},
        {id: 6, description: 'Put code in VSC', notes: 'or intelliJ', completed: false, project_id: 2},
        {id: 7, description: 'Finish app', notes: 'deploy on netlify', completed: false, project_id: 2}
      ]);
    });
};
