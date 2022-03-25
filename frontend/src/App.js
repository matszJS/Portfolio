import { About, Footer, Header, Skills, Perfil, Work } from './container';
import { NavBar,Darkmode } from './components'
import './App.scss'

function App() {
  return (
    <div className="app">
    <NavBar />
    <Darkmode/>
    <Header />
    <About />
    <Perfil/>
    <Work />
    <Skills />
    <Footer />
  </div>
  );
}

export default App;
