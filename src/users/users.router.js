const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const usersController = require("./users.controller");

router.route("/:user_id")
    .get(usersController.readUser)
    .all(methodNotAllowed);

router.route("/:user_id/locations")
    .get(usersController.listLocations)
    .all(methodNotAllowed);

module.exports = router;