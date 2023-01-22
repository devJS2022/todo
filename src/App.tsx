import React from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { TodoPage} from './pages/TodoPage' ;
import { About } from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<TodoPage />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
