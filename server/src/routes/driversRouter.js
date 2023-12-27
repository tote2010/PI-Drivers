const { Router } = require("express");

const driversRouter = Router();

const getDriversHandler = (req, res) => {
    res.status(200).send('Entramos en Drivers');
};
    
const getDriversByIdHandler = (req, res) => {
    res.status(200).send('Entramos detalle por Id de Drivers');
};

const getDriversByNombre = (req, res) => {
    const { name } = req.query;

    try{
        res.status(200).send(`Entramos detalle por ${name} de Drivers`);
    } catch(e) {
        return res.status(400).json({message : 'Falta el nombre'})
    }
}

const postDrivers = (req, res) => {
    res.status(200).send('Entramos POST Drivers');
}

driversRouter.get('/', getDriversHandler);
driversRouter.get('/:id', getDriversByIdHandler);
driversRouter.get('/?nombre', getDriversByNombre);
driversRouter.post('/', postDrivers);

module.exports = driversRouter;