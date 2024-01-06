

const Hero = () => {


  

  
  return (

    <div>
    <div  className='w-[100vw] h-[100%] bg-zinc-400 ' data-scroll data-scroll-speed={-5}>
      <div className="text-center text-white z-20 overflow-hidden" >

        <h1 className=" absolute left-[28%] top-[8%] text-[6vw] font-semibold z-2">iPhone 15 Pro</h1>
        <h3 className=" absolute left-[30%] top-[26%] text-[2.3vw]">Titanium.So Strong.So light.So Pro</h3>
        <button className=" absolute top-[33%] left-[46%] px-6 py-3 text-green-700 text-[28px]">Buy</button>

        <img className="  w-[100%] h-[90vh] object-cover" src="https://www.apple.com/v/home/bi/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_mediumtall.jpg" alt="" />

      </div>

    </div>
    </div>
  )
}

export default Hero