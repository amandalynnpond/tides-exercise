const usersService = require("./users.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

//Middleware
async function userExists(req, res, next){
    const { user_id } = req.params;
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
    res.json({ data: res.locals.user });
};

module.exports = {
    readUser: [
        userExists,
        read
    ]
};