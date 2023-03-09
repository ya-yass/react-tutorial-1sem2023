import Box from '@mui/material/Box';
import Alert from './alert';

const Content = () => {
  return (
    <Box sx={{
      background: '#f5f5f5',
      width: '100%',
      height: 500
    }}>
      <h2>Content</h2>
      {/* PROFESSOR */}
      <Alert type="success" >
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

      {/* MEU // tirar o do professor e descomentar o meu alert.js para funcionar */}
      <Alert text="Alerta verde" color="#6bff5e" />
      <Alert text="Alerta vermelho" color="#e33048" />
    </Box>
  )
}

export default Content  