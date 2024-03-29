const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  numberOfTeams: { type: Number, required: true }
});

module.exports = mongoose.model('League', leagueSchema);