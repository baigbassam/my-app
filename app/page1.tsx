import React from 'react'

const Aboutpage = () => {
  return (
    <div>
      <div className='bg-black'>
      <div className=" bg-black text-white">
      
      <div className="flex justify-center items-center text-center text-sm p-2">
        <div className='text-[14px]' style={{fontWeight:"400"}}>Free delivery on all orders over$50 with code easter checkout </div>
      </div>
      </div>
      </div>
      <div className='top-[21px] left-[28px] py-4 px-4'>Avion</div>
      <div className=' absolute left-[1047px] flex justify-between'>
        <ul className='flex space-x-4'>
            <li>About Us</li>
            <li>Conatct</li>
            <li>Blog</li>
        </ul>
      </div>
      <div>
        <img src='/images/Right Actions.svg' className='absolute left-[1309px]'></img>
      </div>
      <nav>  <ul className='flex justify-center w-[675px] h-[22px] absolute top-[150px] left-[318px] gap-[44px] text-[16px]'>
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
    <div>
        <h1 className='absolute top-[250px] left-[128px] text-[24px]' style={{fontWeight:"400"}}>A brand built on the love of craftmanship,
        quality and outstanding customer service</h1>
        <button className='  bg-gray-100 absolute top-[250px] left-[1120px] py-[16px] px-[32px] gap-[10px] border border-gray-500 rounded'> View Our Products</button>
    </div>
</div>
<div>
    <img src='/images/Text Block.svg'  className='absolute top-[400px]'></img>
    <img src='/images/Image Block.svg' className='absolute top-[400px] left-[650px]'></img>
</div>

<div >
  <img src='/images/Reanme.svg' className='absolute top-[940px]'></img>
  <p  className='absolute top-[975px] left-[800px] text-[32px]'> Our services isnt just personal,it's actually hyper personally exquisite</p>
<p className='absolute top-[1100px] left-[800px] text-[24px]'>When we first started Avion,the idea was simple. Make high quality Furniture, affordable and available for mass market </p>
<p className='absolute top-[1300px] left-[800px] text-[24px]'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community. </p>
<button className='absolute top-[1500px] left-[804px] hover:bg-blue-700 border-2 border-gray-500 text-black w-[150px] h-[56px] text-[16px]'>Get in Touch</button>
</div>

<div>
  <div className='absolute top-[1700px] left-[80px] '>
    <img src='/images/Delivery.svg'></img>
    <h1 style={{fontWeight:"400"}} className='text-[20px]' > Next Day as Standard</h1>
    <p className='text-[16px] '>Order before 3pm and get your order the next day as standard</p>
  </div>
  <div className='absolute top-[1700px] left-[550px] '>
    <img src='/images/Checkmark--outline.svg'></img>
    <h1 style={{fontWeight:"400"}} className='text-[20px]' > Made By True Artisans</h1>
    <p className='text-[16px] '>Handmade crafted goods made by rea passion and craftmanship</p>
  </div>
  <div className='absolute top-[1700px] left-[1100px] '>
    <img src='/images/Purchase.svg'></img>
    <h1 style={{fontWeight:"400"}} className='text-[20px]' > Unbeatable Prices</h1>
    <p className='text-[16px] '> For our material and quality, you wont find  better prices anywhere</p>
  </div>
</div>
<div className='absolute top-[2000px] left-[400px]'>
  <h1 className='text-[36px]'>Join The club and get the benefits</h1>
  <p className='text-[16px] mt-4'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>

  <div className="flex items-center justify-center h-screen ">
    <form className="flex">
        <input type="email" placeholder="your@email.com" className="px-4 py-2 border border-gray-300 rounded-l-md  focus:border-transparent"></input>
        <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-md hover:bg-indigo-700">Sign up</button>
    </form>
</div>


</div>

    </div>
  )
}

export default Aboutpage
