import { Routes, Route } from 'react-router-dom' /* react responsável pela criação de rotas */
import About from './Pages/About'
import Contato from './Pages/Contato'
import Error404 from './Pages/Error404'
import Home from './Pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quem-somos' element={<About />} />
      <Route path='*' element={< Error404 />} /> {/* "*" indica que a rota não é reconhecida */}
      <Route path='/contato' element={<Contato />} />
    </Routes>
  )
}

export default Router