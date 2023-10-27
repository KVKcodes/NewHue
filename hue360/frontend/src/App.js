import './App.css';
import Masthead from './components/Masthead';
import Navbar from './components/Navbar';
import About from './components/About'
import './css/styles.css'
import Projects from './components/Projects';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Masthead/>
      <About/>
      <Projects/>
      <Contactus/>
      <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Your Website 2023</div></footer>
    </div>
  );
}

export default App;
