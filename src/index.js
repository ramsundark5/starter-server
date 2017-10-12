//const cors = require("cors")
const express = require("express")
const app = express();
/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
app.get('/messages', (req, res) =>  {
    res.send('Hello World changed!');
})

exports.api = app;