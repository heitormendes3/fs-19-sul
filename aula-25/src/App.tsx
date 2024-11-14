import './App.css'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
// import { Main } from './components/Main'


function App() {
  return(
    <div className='flex flex-col flex w-full h-full'>
      <Header content='HEADER'/>
      {/* <Main>
      <div>
        <p>MAIN</p>
      </div>
      </Main> */}
      
      <Card
        title='Título 1'
        subtitle='Subtítulo'
        content='Dados'
        footer='Rodapé'
     
      />
      <Card
        title='Título 2'
        subtitle='Subtítulo'
        content='Dados'
        footer='Rodapé'
     
      />
      <Footer value="FOOTER"/>
    </div>
  )
}

export default App
