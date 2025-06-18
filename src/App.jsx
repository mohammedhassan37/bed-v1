import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header   from './components/Header';
import About    from './pages/About';
import Randoms  from './pages/Contact';   // ← exact path & spelling
import Shop from './pages/Shop';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"/>
        <Route path="/about" element={<About />} />
        <Route path="/randoms" element={<Randoms />} />
        <Route path="/shop" element={<Shop />} />
        {/* optional: catch-all */}
        <Route path="*" element={<div>404 – Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
