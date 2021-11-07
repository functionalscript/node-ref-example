const c = require("node-example")
module.exports = {
    "node-example": c,
    "result": c["multiply"](1)(2),
}
