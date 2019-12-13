
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projectResources')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projectResources').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 1, resource_id: 2},
        {project_id: 1, resource_id: 5},
        {project_id: 2, resource_id: 1},
        {project_id: 2, resource_id: 4}
      ]);
    });
};
