import './App.css';
import { BrowserRouter } from "react-router-dom";

import { Router } from './Router.jsx'
import { Header } from './components/header/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
