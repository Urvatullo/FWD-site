import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ComicFetcher from './components/ComicFetcher';
import Contact from './components/Contact';
import Bio from './components/Bio';
import Projects from './components/Projects';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Bio />} />
                <Route path="/comic-fetcher" element={<ComicFetcher />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;
