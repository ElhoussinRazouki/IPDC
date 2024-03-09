import familyImg from '../../assets/family.png'
import Button from "../button/Button"
import car from "../../assets/car.png"
const Container = () => {
  return (
    <>
       <div className=" absolute right-0 top-0 h-[682px] w-[50%] z-[-1] bg-[#FFEAF5]">
</div>
<div>
  <img src={familyImg} alt="" className='absolute h-[590px] w-[62%] top-24 right-0' />
  
</div>
<div className='w-full flex justify-center '>
  <button className='flex  w-[191px] bg-white h-[71px] justify-center items-center rounded-[55px]  shadow-xl mt-7 ml-[27px] outline-none' >
    <img src={car} alt="" className='w-[25.54px] mr-4 mr-5 ' />
  Car Loans
  </button>
</div>
<div className='flex justify-between'>
<div className='pl-[100px]'>
  <h1>
  Chase Your
Dream with us
  </h1>
  <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
  <div>
    <Button value="Apply Online"/>
  </div>
</div>
<button className='flex  w-[191px] bg-white h-[71px] justify-center items-center rounded-[55px]  shadow-xl mt-7 ml-[27px] outline-none' >
    <img src={car} alt="" className='w-[25.54px] mr-4 mr-5 ' />
  Car Loans
  </button>

</div>

      
    </>
  )
}

export default Container
