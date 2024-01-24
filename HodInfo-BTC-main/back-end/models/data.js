const mongoose = require('mongoose')

const CryptSchema = new mongoose.Schema({
  symbol: {
    type: String,
  },
  baseAsset: {
    type: String,
  },
  quoteAsset: {
    type: String,
  },
  openPrice: {
    type: String,
  },
  lowPrice: {
    type: String,
  },
  highPrice: {
    type: String,
  },
  lastPrice: {
    type: String,
  },
  volume: {
    type: String,
  },
  bidPrice: {
    type: String,
  },
  askPrice: {
    type: String,
  },
  at: {
    type: Number,
  },
})

module.exports = mongoose.model('Crpyt', CryptSchema)
