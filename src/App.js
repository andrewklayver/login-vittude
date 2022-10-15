import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import axios from "axios"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function getTarefas(){
//   axios.get()
//   axios.
// }

function App() {
  return (
    <div className="App">
    <BrowserRouter>
         <Header />
         <Body />
       {/* <Routes> */}
        {/* <Route path=""element={<Body /> } /> */}
       {/* </Routes> */}
         <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
