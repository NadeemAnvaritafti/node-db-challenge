
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'person', description: 'he goes by bob the builder'},
        {id: 2, name: 'tool', description: 'no specification'},
        {id: 3, name: 'meeting room', description: 'preferrably limited to ten people'},
        {id: 4, name: 'software', description: 'no specification'},
        {id: 5, name: 'car', description: 'company car'}
      ]);
    });
};
