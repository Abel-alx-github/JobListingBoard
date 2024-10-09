import './App.css';
// import pages from '../pages';
import { Home, Login, Reset, Register, Contact } from '../Pages';

// import components
import {Header, Footer} from '../Components';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

 
export const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
