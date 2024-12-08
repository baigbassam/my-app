import React from 'react'

const Hero = () => {
  return (
    <div>
  
      <div className=' font-poppins w-[65px] h-[30px] absolute top-[20px] left-[687px]' style={{fontWeight:"400"}}>Avion</div>
      
      <img src='/images/Search.svg' height={16} width={16} className='absolute top-[26px] left-[28px]'></img>
      <img className='absolute top-[26px] left-[1364px]' src='/images/Shopping--cart.svg' height={16} width={16}></img>
      <img className='absolute top-[26px] left-[1396px]' src='/images/User--avatar.svg' height={16} width={16}></img>
<nav>
  <ul className='flex justify-center w-[675px] h-[22px] absolute top-[90px] left-[382px] gap-[12px] text-[16px]'>
    <li>Plant Pots</li>
    <li>Ceramics</li>
    <li>Tables</li>
    <li>Chairs</li>
    <li>Crockery</li>
    <li>Tableware</li>
    <li>Cutlery</li>
  </ul>
</nav>
<div>
  <img src='/images/Container.svg' className='w-[1280px] h-[584px] absolute top-[200px] left-[80px]'></img>
</div>
<div className='flex justify-between'>
  <h3 style={{fontWeight:"400"}} className='text-[24px] absolute top-[900px] left-[529px]'>What makes our brand different </h3>
  <div>
    <div className='absolute top-[1000px] left-[86px]'>
      <img src='/images/Delivery.svg'></img>
      <h3 style={{fontWeight:"400"}} className='text-[20px]'>Next Day as Standard</h3>
      <p style={{fontWeight:"400"}} className='text-[16px]'>Order before 3pm and get yor order the next day as standard</p>
    </div>
    <div className='absolute top-[1000px] left-[600px] '>
      <img src='/images/Delivery.svg'></img>
      <h3 style={{fontWeight:"400"}}>Next Day as Standard</h3>
      <p style={{fontWeight:"400"}}>Order before 3pm and get yor order the next day as standard</p>
    </div>
    <div className='absolute top-[1000px] left-[1200px]'>
      <img src='/images/Delivery.svg'></img>
      <h3 style={{fontWeight:"400"}} className='text-[20px]'>Next Day as Standard</h3>
      <p style={{fontWeight:"400"}} className='text-[16px]'>Order before 3pm and get yor order the next day as standard</p>
    </div>
    <div className='absolute top-[1000px] left-[86px]'>
      <img src='/images/Delivery.svg'></img>
      <h3 style={{fontWeight:"400"}} className='text-[20px]'>Next Day as Standard</h3>
      <p style={{fontWeight:"400"}} className='text-[16px]'>Order before 3pm and get yor order the next day as standard</p>
    </div>
  </div>
</div>
<div>
<div>
  <h1 className='absolute top-[1300px] left-[80px] text-[32px]'>New Ceramics</h1>
  <div className="flex flex-col items-center absolute top-[1350px] left-[80px]">
  <img src="/images/Photo.svg" alt="Description of image" className="w-64 h-auto"></img>
  <p className="mt-2 text-gray-700 text-sm">The Dandy Chair</p>
    <p className="mt-2 text-gray-700 text-sm">£250.</p>

</div>
  <div className="flex flex-col items-center absolute top-[1350px] left-[350px]">
  <img src="/images/Photo (1).svg" alt="Description of image" className="w-64 h-auto"></img>
  <p className="mt-2 text-gray-700 text-sm">Rustic Vase Set</p>
  <p className="mt-2 text-gray-700 text-sm">£155</p>
</div>
<div className="flex flex-col items-center absolute top-[1350px] left-[625px]">
  <img src="/images/Photo (2).svg" alt="Description of image" className="w-64 h-auto"></img>
  <p className="mt-2 text-gray-700 text-sm">The Silky Vase</p>
  <p className="mt-2 text-gray-700 text-sm">£155</p>
</div>
<div className="flex flex-col items-center absolute top-[1350px] left-[900px]">
  <img src="/images/Parent (1).svg" alt="Description of image" className="w-64 h-auto"></img>
  <p className="mt-2 text-gray-700 text-sm"> The lucy Lamp</p>
  <p className="mt-2 text-gray-700 text-sm">£155</p>
</div>
<button className='  hover:bg-red-400 bg-gray-100 absolute top-[1800px] left-[635px] py-[16px] px-[32px] gap-[10px] border border-gray-500 rounded'> View Collection</button>
</div>

<div>
<h1 className='absolute top-[2200px] left-[80px] text-[32px]'>Our Popular Products</h1>
  <div className="flex flex-col items-center absolute top-[2300px] left-[80px]">
  <img src="/images/Large.svg" alt="Description of image"></img>
  <p className="mt-3 text-gray-700 text-sm">Large Suede Sofa</p>
    <p className="mt-3 text-gray-700 text-sm">£980.</p>
    </div>

    <div className="flex flex-col items-center absolute top-[2300px] left-[730px]">
  <img src="/images/Photo.svg" alt="Description of image" ></img>
  <p className="mt-3 text-gray-700 text-sm">The Dandy Chair</p>
    <p className="mt-3 text-gray-700 text-sm">£250</p>
    </div>
    
    <div className="flex flex-col items-center absolute top-[2300px] left-[1055px]">
  <img src="/images/Photo (3).svg" alt="Description of image" ></img>
  <p className="mt-3 text-gray-700 text-sm">The Dandy Chair</p>
    <p className="mt-3 text-gray-700 text-sm">£250</p>
    </div>
</div>


<div>
  <div className='absolute left-[351px] top-[2800px]'>
    <h1 style={{fontWeight:"400"}} className='text-[36px]'>Join The Club and Get The Benefits</h1>
    <p className='text-[16px] py-4'>Sign Up for our newsletter and receive exclusive offers on new ranges, sales,pop up stores and more</p>

    <div className="flex items-center space-x-2">
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Sign Up
  </button>
  
  <input 
    type="text" 
    placeholder="Search..." 
    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
  </div>
  <div>
  <img src='/images/Features.svg' className='absolute top-[3000px] w-[1440px] h-[603px]'></img>
  </div>

  <div className="bg-gray-800 py-8 absolute top-[3900px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">Avion</h3>
                    <div className="not-italic mt-4">
                        21 New York Street
                        New York City
                        United States of America
                        432 34
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Social links</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-skype"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Menu</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:text-gray-400">New arrivals</a></li>
                        <li><a href="#" className="hover:text-gray-400">Best sellers</a></li>
                        <li><a href="#" className="hover:text-gray-400">Recently viewed</a></li>
                        <li><a href="#" className="hover:text-gray-400">Popular this week</a></li>
                        <li><a href="#" className="hover:text-gray-400">All products</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:text-gray-400">Crockery</a></li>
                        <li><a href="#" className="hover:text-gray-400">Furniture</a></li>
                        <li><a href="#" className="hover:text-gray-400">Homeware</a></li>
                        <li><a href="#" className="hover:text-gray-400">Plant pots</a></li>
                        <li><a href="#" className="hover:text-gray-400">Chairs</a></li>
                        <li><a href="#" className="hover:text-gray-400">Crockery</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Our company</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:text-gray-400">About us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Vacancies</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
                        <li><a href="#" className="hover:text-gray-400">Returns policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500">
                Copyright 2022 Avion LTD
            </div>
        </div>
    </div>


</div>

</div>


</div>



  )
}

export default Hero
