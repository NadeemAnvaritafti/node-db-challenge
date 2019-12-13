const db = require('../data/db-config');

module.exports = {
    getProjects,
    getResources,
    getTasks
    // addProject,
    // addResource,
    // addTask
}


function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('tasks')
        .select('tasks.id', 'projects.name as project', 'projects.description as project_description', 'tasks.description as task', 'tasks.notes', 'tasks.completed')
        .join('projects', 'tasks.project_id', '=', 'projects.id');
}