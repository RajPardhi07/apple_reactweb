
const page5 = () => {
  return (
    <div className="w-[100vw] h-[75vh] flex bg-white">

      <div className="relative w-[49%] h-[100%] bg-green-500">
      <div className="absolute left-[30%] top-5 text-center">
    <h3 className=' text-[3vw] font-bold text-center -mb-5'> HomePod mini</h3>

    <div>
    <button className=' px-5 py-2 rounded-full text-[19px] text-blue-700 mt-4 mr-5'>Learn More </button>

    <button className=' px-5 py-2 rounded-full text-[19px] text-blue-700 mt-4'>Buy  </button>
    </div>

  </div>
        <img className="w-[100%] h-[100%] object-cover" src="https://www.apple.com/v/home/bi/images/promos/homepod-mini/tile_homepod_mini__b73w4z3ljymu_medium.jpg" alt="" />
      </div>
      <div className="relative w-[49%] h-[100%] ml-3 bg-red-500">

      <div className="absolute left-[30%] top-5 text-center">
    <h3 className=' text-[3vw] font-bold text-center'>TradeIn</h3>

    <h3 className="text-[25px]">Upgrade and save.It is easy</h3>
    <div>
    <button className=' px-4 py-1 rounded-full text-[19px] -mb-5 text-blue-700 mr-5'>See what your device worth. </button>

    </div>

  </div>
      <img className="w-[100%] h-[100%] object-cover" src="https://www.apple.com/v/home/bi/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg" alt="" />

      </div>
    </div>
  )
}

export default page5