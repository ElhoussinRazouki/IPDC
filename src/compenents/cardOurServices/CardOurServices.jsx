import ourIcon from "../../assets/imgcardOurServices/our.jpg";
const CardOurServices = (props) => {
  return (
    <div className="lg:max-w-[254px] p-0">
      <img src={`${props.cover}`} alt="" className="w-[254px] h-[365px] rounded-[9px]" />
      <div className="flex justify-between py-2">
        <p className="max-w-[180px] max-h-[70px]">
            {props.title}
        </p>
        
          
          <a href="#"><img src={ourIcon} alt="" className="w-[37px] h-[37px]" /></a>  
        
      </div>
    </div>
  )
}

export default CardOurServices
