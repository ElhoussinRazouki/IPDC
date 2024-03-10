import telephone from "../../assets/telephone.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between px-[130px] footer py-[64px] ">
        <div className="h-[192px] leading-[30px] flex flex-col justify-between">
          <h1>About the company</h1>
          <div>
            <p className="max-w-[180px]">
              Learn To Love Growth And Change And You Will Be A Success.
              Microsoft Patch{" "}
            </p>
          </div>
          <div className="  flex  space-x-4">
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="h-[192px] leading-[30px]">
          <h1>Products</h1>
          <div>
            <p>CSR Activities</p>
            <p>Green Banking</p>
            <p>News</p>
            <p>Ongoing Campgain</p>
            <p>Updates</p>
          </div>
        </div>
        <div className="h-[192px] leading-[30px]">
          <h1>Get Started</h1>
          <div>
            <p>Career</p>
            <p>Contact Us</p>
            <p>Government Securities</p>
            <p>Examples</p>
            <p>NIS</p>
          </div>
        </div>
        <div className="h-[192px] leading-[30px]">
          <h1>About</h1>
          <div>
            <p>IPDC at a Glance</p>
            <p>Mission, VIsion & Values</p>
            <p>Corporate Governanace</p>
            <p>Shareholders</p>
            <p>Investor Relations</p>
          </div>
        </div>
         <div className="flex h-6">
              < img src={telephone} alt="" />
               <p>16519</p>
         </div>
      </div>
    </>
  );
};

export default Footer;
