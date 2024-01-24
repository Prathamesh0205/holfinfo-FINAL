const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const mongoose = require('mongoose')
const Crypt = require('../models/data')

const getCrypt = async (req, res) => {
  symbol = req.params.id
  console.log(symbol)
  const reqData = {
    method: 'get',
  }

  const reqElement = await Crypt.findOne({
    symbol: symbol,
  })
  if (!reqElement) {
    const resp = await fetch(
      `https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=${symbol}`,
      reqData
    )
    const js = await resp.json()
    const crypt = await Crypt.create(js)
    res.status(StatusCodes.CREATED).json({ crypt })
  } else {
    const resp = await fetch(
      `https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=${symbol}`,
      reqData
    )
    const js = await resp.json()

    if (js === reqElement) {
      res.status(StatusCodes.OK).json({ reqElement })
    } else {
      const del = await Crypt.deleteOne({ _id: reqElement._id })
      const crypt = await Crypt.create(js)
      res.status(StatusCodes.CREATED).json({ crypt })
    }
  }
}

const getElements = async (req, res) => {
  const reqData = {
    method: 'get',
  }
  console.log('hello')
  const del = await Crypt.deleteMany()
  const resp = await fetch(
    `https://api.wazirx.com/sapi/v1/tickers/24hr`,
    reqData
  )
  const js = await resp.json()
  console.log(js)
  const arr = Object.values(js)
  let arr2 = []
  for (let i = 0; i < 10; i++) {
    arr2.push(arr[i])
  }
  const obj = await Crypt.insertMany(arr2)

  res.status(StatusCodes.CREATED).json({ obj })
}

module.exports = {
  getCrypt,
  getElements,
}
