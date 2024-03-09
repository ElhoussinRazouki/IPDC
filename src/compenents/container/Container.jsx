import familyImg from '../../assets/family.png'
import Button from "../button/Button"
import car from "../../assets/car.png"
import house from "../../assets/house.png"

const Container = () => {
  return (
    <>
       <div className=" absolute right-0 top-0 h-[682px] w-[50%] z-[-1] bg-[#FFEAF5]">
</div>
<div>
  <img src={familyImg} alt="" className='absolute h-[690px] w-[62%] top-28 right-0' />
  
</div>
<div className='w-full flex justify-center '>
  <button className='flex  w-[191px] bg-white h-[71px] justify-center items-center rounded-[55px]  shadow-xl mt-7 ml-[27px] outline-none font-[metropolis]' >
    <img src={car} alt="" className='w-[25.54px] mr-4 mr-5 ' />
  Car Loans
  </button>
</div>
<div className='flex justify-between pr-12'>
<div className='pl-[135px] space-y-10'>
  <h1 className='font-[metropolis-bold] max-w-[453px] text-[63px] font-extrabold leading-[68px]'>
  Chase Your
 Dream with us
  </h1>
  <p className='max-w-[380px] font-[metropolis] text-[--gray-color]'>The harder you work for something, the greater you’ll feel when you achieve it.</p>
  <div>
    <Button value="Apply Online"/>
    <button className='outline-none border-solid '></button>
  </div>
</div>
<button className='flex  w-[191px] bg-white h-[71px]  font-[metropolis] justify-center items-center rounded-[55px]  shadow-xl mt-7 ml-[27px] outline-none ' >
    <img src={house} alt="" className='w-[25.54px] mr-5 ' />
    Home Loan
  </button>

</div>

      
    </>
  )
}

export default Container
