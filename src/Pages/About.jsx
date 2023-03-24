import Box from '@mui/material/Box';

import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Content from '../components/Content';

const About = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
          <Content title="Quem somos">
            <p>Esta é quem somos</p>
          </Content>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default About