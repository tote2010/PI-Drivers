const { Router } = require("express");

const teamsRouter = Router();

teamsRouter.get('/', (req, res) => {
    res.status(200).send('Entramos en Teams');
});

module.exports = teamsRouter;