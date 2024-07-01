import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Estate } from './types/types.ts';
//import BookingForm from './components/BookingForm.tsx';
import EstateList from './components/EstateList.tsx';
import EstateDetail from './components/EstateDetail.tsx';

const App: React.FC = () => {
    const [estates] = useState<Estate[]>([
        { id: 1, title: 'Villa i Ramløse', description: '138 kvm, 4 værelser, 2 bad/toilet, 1400 kvm grund', address: 'Møllevænget 15, 3200 Helsinge', price: 3900000, imageUrl: 'src/assets/Møllevænget.jpg' },
        { id: 2, title: 'Estate 2', description: 'Description 2', address: 'Address 2', price: 200000, imageUrl: 'src/assets/Møllevænget.jpg' },
    ]);

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<EstateList estates={estates} />} />
                    <Route path="/booking/:id" element={<EstateDetail estates={estates} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
