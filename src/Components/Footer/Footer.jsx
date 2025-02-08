import logo from '../../assets/logo-BfNap0Pe.png'
function Footer() {
    return (
        <div className="bg-white px-20">
            <div className="flex flex-wrap justify-between items-center">
                <div className='flex flex-wrap w-1/5 items-center py-5 '>

                        <img src={logo} className='w-1/6' alt="" />

                    <h2 className='font-bold text-2xl'>Recipe</h2>
                </div>
                <h2 className='text-blue-600 text-2xl font-bold'>Route</h2>
            </div>
            <hr className='border-t-2 border-gray-300 shadow-md' />
            <p className='py-5 text-center text-gray-600'>© 2025 Nagy Osama™. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
