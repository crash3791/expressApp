const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, required: [true, 'Pole Tytul jest wymagane'] },
  body: { type: String, required: [true, 'Pole Opis jest wymagane'] },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("News", newsSchema);
