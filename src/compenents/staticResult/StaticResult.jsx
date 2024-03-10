
const StaticResult = (props) => {
  return (
    <div>
      
           <h1 className="font-[metropolis-bold] text-[36px]">
        {props.static}
        </h1>
        <p className="font-[metropolis] text-[16px] text-[#999999]">
{props.description}        </p>
      
    </div>
  )
}

export default StaticResult
