import Box from '@mui/material/Box';
import fotoTwt from './assets/img/twt.jpg';
import { ReactComponent as IconFoice } from './assets/img/icon-foice.svg';
import {
  FaCartPlus as iconCarrinho, 
  FaAccessibleIcon as IconRun
} from 'react-icons/fa'
// import { GiCartwheel as CarrinhoRoda } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <Box sx={{
            background: "#DDD",
            width: 200,
            padding: '15px'
        }}>
            <h2>Sidebar</h2>
            <img 
                style={{
                    width: 200,
                    height: 123.83
                }}
                src="https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png"
                alt="Mountain"
            />
            <hr />
            <img src={fotoTwt}
                style={{
                width: 200,
                }} />
            <img
                style={{
                    width: 200,
                    heigh: 120
                }}
                src={fotoTwt}
                alt="Mountain"
            />
            <hr />
            <IconFoice  style={{
                width: 30,
                height: 30,
                fill: '#345345'
            }} />
            <hr />
            <IconRun   
            style={{
                width: 40,
                height: 40,
                color: '#345345'
            }}
            /><hr />
            <iconCarrinho   style={{
                width: 30,
                height: 30,
                fill: '#982234'
            }} />
            <IconFoice  />
            <IconFoice  />
            <hr />        
        </Box>
    )
}

export default Sidebar