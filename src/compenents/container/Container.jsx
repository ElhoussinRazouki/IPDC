import familyImg from "../../assets/family.png";
import Button from "../button/Button";
import car from "../../assets/car.png";
import house from "../../assets/house.png";
import telephone from "../../assets/telephone.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import {Diversity,Integrity,Demonstrate,Teamwork,Collaboration,Technology,Corporate,Digital} from "../../assets/iconCardExperience/iconCardExperience";
import CardExperience from "../cardExperience/CardExperience";
import {etv,holcim,jummit,westin} from "../../assets/imgBUSINESS/BUSINESS";



const Container = () => {
  return (
    <div>
      <div className=" absolute right-0 top-0 h-[682px] w-[50%] z-[-1] bg-[#FFEAF5] Pt-20"></div>
      <div>
        <div>
          <img
            src={familyImg}
            alt=""
            className="absolute h-[690px] w-[62%] top-28 right-0"
          />
        </div>
        <div className="w-full flex justify-center ">
          <button className="flex  w-[191px] bg-white h-[71px] justify-center items-center rounded-[55px]  shadow-2xl -mr-5 mt-7 ml-[27px] outline-none ">
            <img src={car} alt="" className="w-[25.54px] mr-4 mr-5 " />
            Car Loans
          </button>
        </div>
        <div className="flex justify-between pr-12">
          <div className="pl-[135px] space-y-10">
            <h1 className="font-[metropolis-bold] max-w-[453px] text-[63px] font-extrabold leading-[68px]">
              Chase Your Dream with us
            </h1>
            <p className="max-w-[380px]  text-[--gray-color] text-[#010101]">
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </p>
            <div className="space-x-6">
              <Button value="Apply Online" px="2px" py="13px" />
              <button className="outline-none border-[1px] border-[--pink-color] w-[188px] px-[20px] py-[13px] rounded-md text-[--pink-color] font-[12px] ">
                Loan Caclulator
              </button>
            </div>
          </div>
          <button className="flex  w-[191px] bg-white h-[71px]   justify-center items-center rounded-[55px]  shadow-2xl mt-7 ml-[27px] outline-none ">
            <img src={house} alt="" className="w-[25.54px] mr-5 " />
            Home Loan
          </button>
        </div>
        <div className="pl-[135px]  flex pt-52 space-x-4">
          <img src={telephone} alt="" />
          <p>16519</p>
          <div className="border-l-[1px] h-[24px] text-[--gray-color]"></div>
          <img src={facebook} alt=""   />
          <img src={youtube} alt=""    />
          <img src={instagram} alt=""  />
          <img src={linkedin} alt="" />
        </div>
      </div>
      
      <div className="h-[820px]  py-24 space-y-24">
      <div className="flex items-center flex-col space-y-7">
      <h1 className="font-[metropolis-bold] max-w-[820px] text-[36px] font-extrabold leading-[43px] text-[#343434]">
      Creating Extraordinary Customer Experience
      </h1>
      <p className="text-[#999999] max-w-[700px] text-[16px] text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
      </p>
      </div>
         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14 pl-[130px]">
         <CardExperience logo={Integrity} title={"Integrity"} details={"Displaying the highest level of Integrity in the way we conduct our business"} />
         <CardExperience logo={Demonstrate} title={"Demonstrate"} details={"Demonstrating a strong Will to Win in the market place"} />
         <CardExperience logo={Diversity} title={"Diversity"} details={"Promoting Diversity in the work place and community"} />
         <CardExperience logo={Teamwork} title={"Teamwork"} details={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen"} />
         <CardExperience logo={Collaboration} title={"Collaboration"} details={"Displaying the highest level of Integrity in the way we conduct our business"} />
         <CardExperience logo={Technology} title={"Technology"} details={"Harnessing the power of Technology to deliver better customer experience"} />
         <CardExperience logo={Corporate} title={"Corporate"} details={"Setting the standard for the best Corporate Citizenship in the communities we work"} />
         <CardExperience logo={Digital} title={"Digital"} details={"Setting the standard for the best Corporate Citizenship in the communities we work"} />
         </div>
      </div>
      <div className=" h-[449px]  py-20 overflow-hidden space-y-20 bg-[#FCE0EF] bg-opacity-[20%]">
       
            <h1 className="opacity-[80%] font-[metropolis] text-[23px] leading-[23px] tracking-[2.1px] text-center text-[#000000]">BUSINESS PARTNERS </h1>
              <div className=" flex pl-[130px] space-x-32">
                 <img src={westin} alt="" className="w-[185.71px] h-[110.36px]"/>
                <img src={jummit} alt=""  className="w-[185.71px] h-[110.36px]"/>
                <img src={holcim} alt=""  className="w-[185.71px] h-[110.36px]"/>
                <img src={etv} alt="" className="w-[185.71px] h-[110.36px]" /> 
                </div>      
      </div>
    </div>
  );
};

export default Container;
