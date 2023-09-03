import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import Counter from './Components/Counter/Counter'
import List from './Components/List/List'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Header title='Title desde props'> Yo soy el Hijo </Header>
      <Counter setCount={setCount}>Counter is {count}</Counter>
      <List items={["Cofee", "Steak", "Code"]} render={
        (item: string) => (<span className='gold'>{item}</span>)
      } />
      <Footer business='IngBio' />
    </>
  )
}

export default App
