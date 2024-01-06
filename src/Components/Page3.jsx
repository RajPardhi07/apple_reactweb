import video from './Video/medium_2x.mp4'
const Page3 = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-lime-300 mt-3">

<div className='absolute text-white text-center left-[50%] top-[70%] transform -translate-x-1/2 -translate-y-1/2  z-20'>
    <h1 className='text-[3vw] font-bold'><i className="ri-apple-fill"></i> WATCH</h1>
    <h4 className='text-[22px]'>SERIES 9</h4>
    <h2 className='text-[1.5vw] font-semibold'>Double Tap.A magical new way to use Apple Watch.</h2>
    <div>
    <button className='bg-zinc-300 px-5 py-2 rounded-full text-[19px] text-black mt-4 mr-5'>Learn More</button>

    <button className='bg-zinc-300 px-5 py-2 rounded-full text-[19px] text-black mt-4'>Buy</button>
    </div>
</div>
        <video autoPlay muted loop className="w-[100%] h-[100%] object-cover"  src={video} ></video>
    </div>
  )
}

export default Page3