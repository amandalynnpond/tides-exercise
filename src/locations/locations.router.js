const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const locationsController = require("./locations.controller");

router.route("/:location_state/:location_city")
    .get(locationsController.readLocation)
    .post(locationsController.createUserLocation)
    .all(methodNotAllowed);

module.exports = router;