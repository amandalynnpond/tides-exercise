const locationsService = require("./locations.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//Middleware
async function locationExists(req, res, next){
    const { location_city } = req.params;
    const { location_state } = req.params;
    const location = await locationsService.read(location_city, location_state);
    if (location){
        res.locals.location = location;
        return next();
    }
    return next({
        status: 404,
        message: `Location ${location_city}, ${location_state} is unavailable.`
    });
};

//Services
async function read(req, res, next){
    res.json({ data: res.locals.location });
};

module.exports = {
    readLocation: [
        locationExists,
        read
    ]
};