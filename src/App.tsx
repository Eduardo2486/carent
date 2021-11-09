import React, { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Agents from './pages/Agents';
import News from './pages/News';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cars from './pages/Cars';

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/agents" element={<Agents />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
