
const Button = (props) => {
  return (
    <button className='bg-[--pink-color] text-white p-1 px-5 gap-[10px] font-[Rubik] rounded-md tracking-[2px] '>
     {props.value}
    </button>
  )
}

export default Button
