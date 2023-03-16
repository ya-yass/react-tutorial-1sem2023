import {useState} from 'react' //sempre que uma função for oficialmente do React, é chamado de hook
//um hook só pode ser usado antes do RETURN

const SampleUseState = () => {
  //"counter" é a variável que vai guardar um estado, "setCounter" é uma função que vai mudar a variável

  //contador
  const [counter, setCounter] = useState(0) //foi criado um array para somar na variável, o counter vai começão com (0)
  /* setCounter == função
    counter == variável
  */

  //

  //nome
  const [name, setName] = useState ('Rita')

  console.log('Rodei')


  return (
    <div>
      <h2>counter: {counter}</h2>
      <button onClick={() => setCounter(counter+1)}> + </button> {/* chama por arrow function para não cair em laço infinito */}
      <button onClick={() => setCounter(counter-1)}> - </button>
      
      <hr />

      <h2>Olá {name}!</h2>
      <button onClick={() => setName('Márcia')}> É Márcia! </button>
      <button onClick={() => setName('Rose')}> É Rose! </button>
      <button onClick={() => setName('Rita')}> Era Rita... </button>

    </div>
    // div>ul --> cria uma ul dentro de div
  )
}

export default SampleUseState