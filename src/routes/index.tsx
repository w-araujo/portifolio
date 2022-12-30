import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/index';
import Projects from '../pages/Projects/index'

const Routtes: React.FC = () => (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={<Projects />}/>
    </Routes>
)

export default Routtes