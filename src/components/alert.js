import { borderRadius, padding } from "@mui/system"
import {
  FaCheck as Done, 
  FaClock as Clock,
  FaCompress as Fail
} from 'react-icons/fa'

const typeColor = {
  success: "#cdefd6",
  error: '#efcdcd',
  info: '#cddeef',
  warning: '#ebe5b7'
}

//do professor
const Alert = ({type, children}) => {

  const bg = {
      background: typeColor[type],
      padding: '20px',
      borderRadius: '10px'
  }    
  
  return (
      <div style={bg}>
          {children}
      </div>
  )
}

/* meu
const Alert=(props)=>{
  const bg = {
    background: props.color,
    padding: '20px',
    borderRadius: '10px'
  }

  return(
    <div
      style = {bg}>
      {props.text}
    </div>
  )
} */

export default Alert