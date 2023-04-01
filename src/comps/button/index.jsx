export default function Button({
  name,
  onClick=()=>{},
  className
}){
    
  return (
    <button onClick={onClick} className={className}>{name}</button>
  )
}