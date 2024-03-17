import './App.css'
import './index.css'
import { Auth } from './components/Auth'
import { Main } from './components/Main'


function App() {
  return <div>
       <Auth>
          <Main />
       </Auth>
  </div>
}

export default App
