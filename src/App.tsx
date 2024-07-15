import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Estate } from './types/types';
import EstateList from './components/EstateList';
import EstateDetail from './components/EstateDetail';
import Confirmation from './components/Confirmation';

const App: React.FC = () => {
    const [estates] = useState<Estate[]>([
        { id: 1, title: 'Villa i Ramløse', description: '138 kvm, 4 værelser, 2 bad/toilet, 1400 kvm grund', address: 'Møllevænget 15, 3200 Helsinge', price: 3900000, imageUrl: 'images/Møllevænget_2.jpg' },
    ]);

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<EstateList estates={estates} />} />
                    <Route path="/booking/:id" element={<EstateDetail estates={estates} />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
