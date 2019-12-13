
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Paint House', description: 'we need to paint a house', completed: false},
        {id: 2, name: 'Build App', description: 'we need to build an app', completed: false}
      ]);
    });
};
