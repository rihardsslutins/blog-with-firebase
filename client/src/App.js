import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
