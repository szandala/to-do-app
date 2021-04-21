import './App.css';
import Main from './components/Main'

import {BrowserRouter as Router, NavLink} from 'react-router-dom';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <header>Tu jest nagłówek</header>
    <main>

        <nav>
            <NavLink to="/" exact>Lista wszytkich</NavLink>
            <NavLink to="/new">Dodaj nowy</NavLink>
            <NavLink to="/trash">Śmietnik</NavLink>
        </nav>

      <Main />

    </main>
    <footer>Stopka</footer>
</Router>
  );
}

export default App;
