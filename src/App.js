/*
import logo from './logo.svg'; //arquivo de imagem importa com FROM
import './App.css'; //arquivo css importa direto
import Header from './components/Header'

//dentro de return, a primeira seção não pode ter irmão, somente uma seção pai

/*function App() { //modo antigo de programar
  return ( //tudo o que estiver em return vai retornar (como resposta) no index, onde a função foi chamada
    // é JSX, não HTML, uma linguagem semelhante
    // para atribuir classe ao elemento, usa-se className
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>UN-TAKE ME</b> - React
          
        </p>
      </header>
    </div>
  );
}//

const App = () =>{ // modo atual de programar
  return(
    <> 
    <h1>aaa</h1>
    <p> "<></>" é um <b>fragment</b>, usado como seção pai para que todo o restante do código prossiga normalmente</p>
    </>
  )
}
export default App; //tag necessária para exportar o componente
*/

import Box from '@mui/material/Box';

import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <MainMenu />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content />
      </Box>
      <Footer />
    </>
  )
}

export default App