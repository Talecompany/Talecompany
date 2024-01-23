import "./App.css";
import logoTale from './assets/images/LogoTale.png';
import language from './assets/images/Language.png';

import './styles/backgroundStyle.css';

import CreateAccount from "./components/CreateAccount";
import CreatePassword from "./components/CreatePassword";



function App() {
  return (
    <div className="signUp">
      <CreateAccount />
      
      <div className="logoTale" style={{ backgroundImage: `url(${logoTale})` }} />
      <div className="language" style={{ backgroundImage: `url(${language})` }} />

    </div >

  );
}

export default App;