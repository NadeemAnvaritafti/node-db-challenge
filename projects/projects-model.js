const db = require('../data/db-config');

module.exports = {
    getProjects,
    getProjectById,
    getResources,
    getTasks,
    getProjectTasks,
    addProject,
    addResource,
    addTask
}


function getProjects() {
    return db('projects');
}

function getProjectById(id) {
    return db('projects')
        .where({ id })
        .first();
}

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('tasks')
        .select('tasks.id', 'tasks.description as task', 'tasks.notes', 'tasks.completed', 'projects.name as project', 'projects.description as project_description')
        .join('projects', 'tasks.project_id', '=', 'projects.id');
}

function getProjectTasks(id) {
    return db('tasks')
        .select('tasks.id', 'tasks.description as task', 'tasks.notes', 'tasks.completed', 'projects.name as project', 'projects.description as project_description')
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .where('tasks.project_id', id);
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => {
            const [id] = ids;

            return db('projects')
                .where({ id })
                .first();
        })
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(ids => {
            const [id] = ids;

            return db('resources')
                .where({ id })
                .first();
        })
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(ids => {
            const [id] = ids;

            return db('tasks')
                .where({ id })
                .first();
        })
}