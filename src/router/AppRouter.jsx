import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/Views/Home';
import { Navbar } from '../components/shareds/Navbar/Navbar';
import { About } from '../components/Views/About';

export const AppRouter = () => {
    return (
        <BrowserRouter>
                <Navbar />

            <Routes>
                <Route path='/' element={
                    <Home />
                }
                />
                <Route path='/about' element={
                    <About />
                }
                />

            </Routes>

        </BrowserRouter>
    )
}
