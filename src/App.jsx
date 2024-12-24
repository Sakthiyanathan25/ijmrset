import './App.css';
import Home from './pages/Home';
import Author from './pages/Author';
import Contact from './pages/Contact';
import EditorDesk from './pages/EditorDesk';
import EditorBoard from './pages/EditorBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editor-desk" element={<EditorDesk />} />
        <Route path="/editor-board" element={<EditorBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
