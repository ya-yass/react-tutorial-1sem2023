import Button from '@mui/material/Button'; //importando o botão de Material UI

const MainMenu = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ulMenu}>menu...</ul>
      <Button sx={{
        background: '#00FF00',
        color: 'gray',
        '&:hover': {
          background: '#00FF22'
        }
      }
      } variant="contained">Contained</Button>
    </nav >
  )
}

const styles = {
  nav: {
    background: '#555',
    color: '#000',
    padding: '20px',
    marginTop: '5px'
  },
  ulMenu: {
    listStyleType: 'none'
  }
}


export default MainMenu