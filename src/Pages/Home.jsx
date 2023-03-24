import Box from '@mui/material/Box';
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Alert from '../components/Alert';
import SampleUseState from '../components/SampleUseState';

const Home = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title={Home}>
          <Alert type="success" >
            Deu certo!
          </Alert>

          <Alert type="error">
            Deu Erro!
          </Alert>

          <Alert type="info">
            Info!
          </Alert>

          <Alert type="warning">
            Warning!
          </Alert>
        </Content>
      </Box>
      <Footer />
    </>
  )
}

export default Home