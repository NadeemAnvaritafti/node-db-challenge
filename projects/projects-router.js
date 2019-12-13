const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i].completed === 0) {
                projects[i].completed = false;
            } else if (projects[i].completed === 1) {
                projects[i].completed = true;
            }
        }
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to get projects' })
    })
});


router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to get resources' })
    })
});


router.get('/tasks', (req, res) => {
    Projects.getTasks()
    .then(tasks => {
        for (let i=0; i<tasks.length; i++) {
            if (tasks[i].completed === 0) {
                tasks[i].completed = false;
            } else if (tasks[i].completed === 1) {
                tasks[i].completed = true;
            }
        }
        res.status(200).json(tasks);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to get tasks' })
    })
});


router.post('/', validateProject, (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
    .then(project => {
        if (project.completed === 0) {
            project.completed = false;
        } else if (project.completed === 1) {
            project.completed = true;
        }
        res.status(201).json(project);
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'Failed to add project' })
    })
});




// ----------------------- CUSTOM MIDDLEWARE ------------------------ //
function validateProject(req, res, next) {
    const projectData = req.body;
    if (!projectData) {
        res.status(400).json({ error: 'missing project data' })
    } else if (!projectData.name) {
        res.status(400).json({ error: 'missing required project name' })
    } else {
        next();
    }
}



module.exports = router;