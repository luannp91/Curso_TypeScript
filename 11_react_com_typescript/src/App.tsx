import React from 'react';

//  4 - Importando Componentes
import FirstComponent from './components/FirstComponent';

//  5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

//  6 - Hook useState
import State from './components/State';

//  8 - Types
type textOrNull = string | null

function App() {

  //  1 - Variáveis no React
  const data = new Date();
  const year = data.getFullYear();
  const name: string = "Johnny";
  const age: number = year - 1991;
  const isWorking: boolean = true;

  //  2 - Funções em Componentes
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  }

  //  8 - Types
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  mySecondText = "Opa"

  return (
    <div className="App">
      <h1>TypeScript Com React</h1>
      <h2>Nome: { name }</h2>
      <p>Idade: { age }</p>
      { isWorking && <p>Está trabalhando</p>}
      <h3>{ userGreeting(name) }</h3>
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring
        title="Primeiro Post"
        content="Algum Conteúdo"
        commentQty={ 10 }
        tags={ ["ts", "js"] }
        category={ Category.TS }
      />
      <State/>
      { myText && <p>Tem texto na variável</p> }
      { mySecondText && <p>Tem texto na variável</p>}
    </div>
  );
}

export default App;
