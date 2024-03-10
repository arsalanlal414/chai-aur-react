import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
     <div className='flex'>
      <Card name="Helshim" btnText="Click me"/>
      <Card name="Rembo" btnText="Visit me"/>
      <Card name="Tarren" btnText="Welcome.."/>
     </div>
    </>
  )
}

export default App
