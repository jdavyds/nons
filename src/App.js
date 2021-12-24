import './App.css';
import Header from './components/header/header';
import Welcome from './components/welcome/welcome';
import About from './components/about/about';
import Rules from './components/rules/rules';
import Prizes from './components/prizes/prizes';
import ToGet from './components/toGet/toget';
import Coaches from './components/coaches & cordinators/coaches';
import Schools from './components/schools/schools';
import Contestant from './components/contestant/contestant';
import Faq from './components/faq/faq';
import Sponsors from './components/sponsors/sponsors';
import Register from './components/register/register';
import Subscribe from './components/subscribe/subscribe';
import Footer from './components/footer/footer';
import { ArrowUpward } from '@material-ui/icons'
function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Rules />
      <Prizes />
      <ToGet />
      <Coaches />
      <Schools />
      <Contestant />
      <Faq />
      <Sponsors />
      <Register />
      <Subscribe />
      <Footer />
      <nav className='super-nav'>
      <ArrowUpward id='super'/>
      </nav>
    </div>
  );
}

export default App;
