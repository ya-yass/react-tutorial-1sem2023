// Arquivo que contém o componente "mãe" da aplicação, nele é importado os demais componentes em forma de tag
// Os componentes são criados separadamente em arquivos .js .html .css 
// Os componentes não usa camelCase, sempre irão começar com Maiúscula

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // para importar CSS basta colocar import 'arquivo.css' | não precisa import from 'arquivo.css'
                      // css importado no index vale para toda a aplicação
import App from './App'; // para importar .js não é necessário usar a extensão do arquivo para que o programa o reconheça

const root = ReactDOM.createRoot(document.getElementById('root'));
  // requisita 'root' para que tudo o que vem depois apareça na página
root.render(
  <React.StrictMode>
    <App />
    {/* <div>Olá Mundo</div> */}
  </React.StrictMode>  
  /* carrega o componente duas vezes para que quando a ação for abortada, ela pare a requisição | um exemplo é quando o usuário requisitou uma informação dentro do banco de dados, mas logo depois cancelou o pedido; StrictMode serve para comunicar o banco que a ação foi abortada
  Ele só roda no modo dev, então quando o usuário usar nosso site, isso de rodar duas vezes não vai acontecer*/
);