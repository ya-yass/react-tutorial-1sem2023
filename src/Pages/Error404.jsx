import Box from '@mui/material/Box';

import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Error404 = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
          <h1>Ops... Página não encontrada</h1>
          <h1>Verifique se tralala</h1>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Error404