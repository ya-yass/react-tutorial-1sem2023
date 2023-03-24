import Box from '@mui/material/Box';

import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Contato = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
          <h1>Contato</h1>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Contato