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


module.exports = router;