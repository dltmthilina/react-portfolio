import {Route} from 'react-router-dom'



import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
        
      <main>
        <Route path="/"><Home/></Route>
        <Route path="/projects"> <Projects/> </Route>
        <Route path="/contacts"><Contact/></Route>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
