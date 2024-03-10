
const CardExperience = (props) => {
  return (
    <div className="max-h-[231px] w-[259px]  p-6 space-y-5 ">
      <img src={`${props.logo}`} alt="logo" className="w-[37px] h-[37px]"  />
      <h1 className="font-extrabold  font-[metropolis-bold] text-[22px] text-[#363940] leading-[22x]  ">{props.title}</h1>
      <p className="text-[#999999] max-w-[160px] text-[14px] text-center leading-[24x] text-start">{props.details}</p>
    </div>
  )
}

export default CardExperience
