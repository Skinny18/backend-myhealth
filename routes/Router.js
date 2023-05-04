const express = require("express")
const router = express()


router.use("/api/users", require("./UserRoutes"))
router.use("/api/form", require("./FormRoutes"))


router.get("/", (req, res) => {
    res.send("API Working")
})

module.exports = router