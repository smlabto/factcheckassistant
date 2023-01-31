import './App.css';

import Navbar from "./components/Navbar";
import MainPage from './pages/MainPage';
import Copyright from './components/Copyright';

function App() {
  return (
    <body id="page-top">
      <Navbar />
      <MainPage />
      <Copyright />
    </body>
  );
}

export default App;
