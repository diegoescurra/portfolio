import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/Views/Home';
import { Navbar } from '../components/shareds/navbar/Navbar';

export const AppRouter = () => {
    return (
        <BrowserRouter>

        <Navbar />
          <Home />
        </BrowserRouter>
    )
}
