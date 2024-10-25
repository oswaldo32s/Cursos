const {Router} = require('express');

const projectRouter = Router()

projectRouter.get('/', (req, res) => res.send('project router'))

module.exports = projectRouter