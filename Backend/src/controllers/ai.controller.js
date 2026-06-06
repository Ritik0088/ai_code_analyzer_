const aiServices = require("../services/ai.services")
// require('dotenv').config()
// const aiController = require("../controllers/ai.controller")

module.exports.getReview= async (req,res) => {

    const code = req.body.code
    if(!code) {
        return res.status(400).send("Prompt is required")
    }
    const response = await aiServices(code)
    res.send(response)

    console.log(req.body.code);
}