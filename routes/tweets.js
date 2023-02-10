var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweets');

router.post('/new', (req, res) => {
    const newTweet = new Tweet({
        content: req.body.content,
})
newTweet.save().then((data) => {
    res.json({ data });
})
})
module.exports = router;