import React, { useState, useEffect } from 'react'
import wazir from '../wazirx.png'
const Navbar = () => {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([
    {
      symbol: 'btc',
      lowPrice: 100000,
      highPrice: 100000,
      lastPrice: 100000,
      openPrice: 100000,
    },
  ])
  // console.log(data);

  const options = ['INR']
  const alternate = [
    'BTC',
    'ETH',
    'USDT',
    'XRP',
    'TRX',
    'DASH',
    'ZEC',
    'XEM',
    'IOST',
    'WIN',
    'BTT',
    'WRX',
  ]

  const [selectedOption, setSelectedOption] = useState('btcinr')
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 60 ? 1 : prevCount + 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetch1 = async () => {
      const reqOption = {
        method: 'get',
      }
      const data = await fetch(
        `https://app.netlify.com/sites/neon-pixie-7e072b/deploys/${selectedOption}`,
        reqOption
      )
      const data2 = await data.json()
      console.log(data2)
      const { symbol, bidPrice, highPrice, lastPrice, lowPrice, openPrice } =
        data2.crypt
      console.log(bidPrice, highPrice, lastPrice, lowPrice)
      // console.log(lowPrice,highPrice);
      const newdata = [
        {
          symbol: symbol,
          lowPrice: lowPrice,
          highPrice: highPrice,
          lastPrice: lastPrice,
          openPrice: openPrice,
        },
      ]
      setData(newdata)
    }
    fetch1()
  }, [])

  const handleOptionChange = async (option) => {
    console.log(option)
    setSelectedOption(option)
    let x = option + options[0]
    console.log(x.toLowerCase())
    const reqOption = {
      method: 'get',
    }
    const data = await fetch(
      `http://localhost:8000/${x.toLowerCase()}`,
      reqOption
    )
    const d = await data.json()
    const { symbol, bidPrice, highPrice, lastPrice, lowPrice, openPrice } =
      d.crypt
    // console.log(d);
    const newdata = [
      {
        symbol: symbol,
        lowPrice: lowPrice,
        highPrice: highPrice,
        lastPrice: lastPrice,
        openPrice: openPrice,
      },
    ]
    setData(newdata)
  }

  const handleFetch = async () => {
    const reqOption = {
      method: 'get',
    }
    const data = await fetch(`http://localhost:8000/crypt/fetch`, reqOption)
    const fdata = await data.json()
    console.log(fdata.obj)
    setData(fdata.obj)
  }

  return (
    <>
      <div className="bg-gray-900 w-full h-40 flex justify-around">
        <div className="grow">
          <h1 className="text-5xl text-cyan-500 text-bold hed text-center mt-14">
            HODLINFO
          </h1>
        </div>
        <div className="flex grow mt-9 justify-center">
          <div className="ml-32 mt-8 w-14">
            <select
              value={selectedOption}
              onChange={(e) => handleOptionChange(e.target.value)}
              className="bg-gray-600 w-14 rounded-md"
            >
              {options.map((option, index) => (
                <option key={index} value={option} className="bg-white">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="ml-12 mt-8 w-14">
            <select
              value={selectedOption}
              onChange={(e) => handleOptionChange(e.target.value)}
              className="bg-gray-600 w-14 rounded-md"
            >
              {alternate.map((option, index) => (
                <option key={index} value={option} className="bg-white">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="ml-10 mt-8 bg-gray-600 w-14 h-6 rounded-md"
              onClick={handleFetch}
            >
              Fetch
            </button>
          </div>
          <div>
            <button className="ml-10 mt-8 bg-gray-600 w-14 h-6 rounded-md">
              BTC
            </button>
          </div>
        </div>
        <div class=" flex justify-center items-center getouter text-cyan-500">
          {count}
        </div>
        <div className="grow justify-center">
          <button className="bg-cyan-500 text-white mt-16 ml-12 h-10 w-44 rounded">
            Connect Telegram
          </button>
        </div>
      </div>
      <div className="stat bg-gray-900 ">
        <ul className=" flex justify-around flex-end items-center">
          <li className="px-14">
            <div className="text-center pt-10">
              <p className="text-cyan-500 text-3xl">0.76%</p>
              <p className="text-gray-400 text-xl">5 min</p>
            </div>
          </li>
          <li className="px-14">
            <div className="text-center pt-10">
              <p className="text-cyan-500 text-3xl">1.46%</p>
              <p className="text-gray-400 text-xl">1 Hour</p>
            </div>
          </li>
          <li className="px-14">
            <div className="text-center">
              <p className="text-gray-400 text-3xl pb-4">Best Place to Trade</p>
              <p className="text-center text-white text-7xl">Rs 35,79,115</p>
              <p className="text-gray-400 text-xl">
                Average BTC/INR net price including commission
              </p>
            </div>
          </li>
          <li className="px-14">
            <div className="text-center pt-10">
              <p className="text-cyan-500 text-3xl">8.35%</p>
              <p className="text-gray-400 text-xl">1 Day</p>
            </div>
          </li>
          <li className="px-14">
            <div className="text-center pt-10">
              <p className="text-cyan-500 text-3xl">12.28%</p>
              <p className="text-gray-400 text-xl">7 Days</p>
            </div>
          </li>
        </ul>
      </div>
      <div class=" bg-gray-900 relative flex flex-col w-full  overflow-scroll text-black bg-black text-white shadow-md bg-clip-border scrollbar-hide pt-20 gettab">
        <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th class="p-7  border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70 ">
                  #
                </p>
              </th>
              <th class="p-7  border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Platform
                </p>
              </th>
              <th class="p-7  border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Last Traded Price
                </p>
              </th>
              <th class="p-7  border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Buy / Sell Price
                </p>
              </th>
              <th class="p-7  border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Difference
                </p>
              </th>
              <th class="p-7  border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Savings
                </p>
              </th>
            </tr>
          </thead>
          {data.map(({ lowPrice, highPrice, lastPrice }, idex) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td class="p-6 ml-6 border-b border-blue-gray-50">
                      <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900">
                        {idex + 1}
                      </p>
                    </td>
                    <td class="p-6 ml-6 border-b border-blue-gray-50">
                      <div className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900 flex">
                        <img
                          src={wazir}
                          alt="wazir-logo"
                          className="h-8  pr-5 rounded-3xl"
                        />
                        <p>WazirX</p>
                      </div>
                    </td>
                    <td class="p-6 ml-6 border-b border-blue-gray-50">
                      <p className="block font-sans text-xl antialiased font-normal leading-normal text-blue-gray-900 pl-7">
                        {`Rs ${lastPrice}`}
                      </p>
                    </td>
                    <td class="p-6 ml-6 border-b border-blue-gray-50">
                      <p className="block font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900">
                        {`Rs ${lowPrice}/Rs ${highPrice}`}
                      </p>
                    </td>
                    <td class="p-6 ml-6 border-b border-blue-gray-50">
                      <p className="block font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900 pl-8">
                        {`${(
                          ((highPrice - lowPrice) / highPrice) *
                          100
                        ).toFixed(2)} %`}
                      </p>
                    </td>
                    <td class="p-6 ml-6 border-b border-blue-gray-50">
                      <p className="block font-sans text-xl antialiased font-medium leading-normal text-blue-gray-900">
                        {`Rs ${(highPrice - lowPrice).toFixed(2)}`}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </>
            )
          })}
        </table>
      </div>
    </>
  )
}
export default Navbar
