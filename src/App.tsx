
import './App.css'
import About from './components/about'
import Expirence from './components/expirence'
import Header from './components/header'
import TechStack from './components/techstack'

function App() {
  // #030711
  return (
    
    <div className="w-full h-screen bg-[#030711] px-80 flex-col">
<Header />
<About />
<Expirence />
<TechStack />
</div>

  )
}

export default App
