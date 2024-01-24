const Rates = () => {
    return (

        <div className="stat bg-gray-900 ">
            <ul className=' flex justify-around flex-end items-center'>
                <li className='px-14'><div className='text-center '><p className='text-cyan-500 text-3xl'>0.76%</p><p className='text-gray-400 text-xl'>5 min</p></div></li>
                <li className='px-14'><div className='text-center'><p className='text-cyan-500 text-3xl'>1.46%</p><p className='text-gray-400 text-xl'>1 Hour</p></div></li>
                <li className='px-14'><div className='text-center'><p className='text-center text-white text-7xl'>Rs 35,79,115</p><p className='text-gray-400 text-xl'>Average BTC/INR net price including commission</p></div></li>
                <li className='px-14'><div className='text-center'><p className='text-cyan-500 text-3xl'>8.35%</p><p className='text-gray-400 text-xl'>1 Day</p></div></li>
                <li className='px-14'><div className='text-center'><p className='text-cyan-500 text-3xl'>12.28%</p><p className='text-gray-400 text-xl'>7 Days</p></div></li>
            </ul>
        </div>
    )
}
export default Rates