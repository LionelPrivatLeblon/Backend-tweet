const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  content: String,
});

const Tweet = mongoose.model("tweets", userSchema);

module.exports = Tweet;
