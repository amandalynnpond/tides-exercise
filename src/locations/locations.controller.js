const locationsService = require("./locations.service")
const usersService = require("../users/users.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//Middleware
async function locationExists(req, res, next){
    const { location_city } = req.params;
    const { location_state } = req.params;
    const location = await locationsService.read(location_city, location_state);
    if (location){
        res.locals.location = location;
        return next();
    };
    return next({
        status: 404,
        message: `Location ${location_city}, ${location_state} is unavailable.`
    });
};

async function userExists(req, res, next){
    const { user_id } = req.body.data;
    const user = await usersService.read(user_id);
    if (user){
        res.locals.user = user;
        return next();
    }
    return next({
        status: 404,
        message: `User ${user_id} does not exist.`
    });
};

//Services
async function read(req, res, next){
    res.json({ data: res.locals.location });
};

async function create(req, res) {
    let location = res.locals.location;
    let user = res.locals.user;
    let userLocation = {"user_id": user.user_id, "location_id": location.location_id}
    const data = await locationsService.create(userLocation);
    res.status(201).json({ data });
};

module.exports = {
    readLocation: [
        locationExists,
        read
    ],
    createUserLocation: [
        userExists,
        locationExists,
        asyncErrorBoundary(create)
    ]
};