import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DivMainRouter } from './components/commons';
import Dashboard from './pages/dashboard/dashboard';
import Menu from './components/menu/menu';
export default function Router() {
    return <BrowserRouter>
        <DivMainRouter>
            <Menu />
            <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </DivMainRouter>
    </BrowserRouter>
}

