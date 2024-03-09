
const Button = (props) => {
  return (
<button className={`bg-[--pink-color] text-white  px-[${props.px}] py-[${props.py}]    font-[Rubik] rounded-md tracking-[2px]`}>
     {props.value}
    </button>
  )
}

export default Button
