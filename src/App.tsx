import Exchanger from './app-components/Exchanger';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <FontAwesomeIcon icon={faCoins} /> Currency Convertor
      </header>
      <div className="app-content">
        <Exchanger />
      </div>
      <div className="footer">
        <div className="de-emphasize">Created by</div>
        <div className="creator-name">
          <a href="mailto: uv.dare@gmail.com">Venkatesh Ramalingam</a>
        </div>
        <div className="social">
          <a href="https://github.com/RVenkatesh" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/venkatesh-ramalingam-76368915/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
