import Box from '@mui/material/Box';
import fotoTwt from './assets/img/twt.jpg';
import { ReactComponent as IconFoice } from './assets/img/icon-foice.svg';
import {
  FaCartPlus as iconCarrinho, 
  FaAccessibleIcon as IconRun
} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <Box sx={{
      background: "#DDD",
      width: 200,
      height: '100%',
    }}>
      <h2>Sidebar</h2>
      <img
        style={{
          width: 200,
        }}
        src="https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png" />

      <img src={fotoTwt}
        style={{
          width: 200,
        }} />

      <hr></hr>

      <IconFoice 
        style={{
        width: 30,
        height: 30
      }} />

      <hr></hr>

      <IconRun />

      <hr></hr>

      <iconCarrinho />

    </Box>
  )
}

export default Sidebar