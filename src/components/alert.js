/*import { borderRadius, padding } from "@mui/system"
import {
  FaCheck as Done, 
  FaClock as Clock,
  FaCompress as Fail
} from 'react-icons/fa'*/

import {MdOutlineDone, MdInfoOutline, MdOutlineWarningAmber} from 'react-icons/md'
import {VscError} from 'react-icons/vsc'

const typeColor = {
  success: '#cdefd6',
  error: '#efcdcd',
  info: '#cddeef',
  warning: '#ebe5b7'
}

const typeIcon = {
  success: <MdOutlineDone style={{color: '#2f7441'}}/>,
  error: <VscError style={{color: '#bd2626'}}/>,
  info: <MdInfoOutline style={{color: '#244a70'}}/>,
  warning: <MdOutlineWarningAmber style={{color: '#b7852a'}}/>
}

//do professor
const Alert = ({type, children}) => {

  const bg = {
      background: typeColor[type], 
      padding: '20px',
      margin: '10px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
  }    
  
  return (
      <div style={bg}>
          {typeIcon[type]}
          <span>{children}</span>
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