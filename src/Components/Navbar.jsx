import 'remixicon/fonts/remixicon.css'

const Nav = () => {
    return (
        <div className='relative'>
            <div className="fixed top-[0] z-[10] bg-black w-[100vw] h-[8vh] flex items-center gap-[30px] justify-center text-white text-2xl">

                 <h3><i className="ri-apple-fill"></i></h3>
                <h3>store</h3>
                <h3>watch</h3>
                <h3>ipods</h3>
                <h3>service</h3>
                <h3>contact</h3>
            </div>
        </div>
    )
}

export default Nav