import 'remixicon/fonts/remixicon.css'

const Page6 = () => {
  return (
    <div className="relative w-[100%] h-[100vh] bg-white mt-4 flex">
      <div className="w-[50%] h-[60%]">
            <button className='absolute left-[54%] top-[4%] px-4 py-3 bg-black text-white font-bold rounded-full'>Stream Now <i className="ri-play-circle-fill"></i></button>
            <h1 className='absolute left-[65%] text-[1.5vw] top-[4%]'>Drama: New Series Premier Now</h1>
            <img className="w-[100%] h-[100%] object-cover" src="https://is1-ssl.mzstatic.com/image/thumb/cXVsKbD0Sk-ogzcoNmj6aA/689x387.jpg" alt="" />
      </div>

      <div className="w-[50%] h-[60%]">

      <button className='absolute left-[2%] top-[69%] px-4 py-3 bg-black text-white font-bold rounded-full'>Stream Now <i className="ri-play-circle-fill"></i></button>
            <h1 className='absolute left-[14%] text-[1.5vw] top-[69%]'>Comedy: Thrilling road trip comedy</h1>
      <img className="w-[100%] h-[100%] mt-[40%] object-cover" src="https://is1-ssl.mzstatic.com/image/thumb/tPJwMGtsAr_psAVlyf2Rzg/689x387.jpg" alt="" />

      </div>

    </div>
  )
}

export default Page6