import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/private" element={<PrivateRoute/>}>
        <Route path="user" element={<User />} />
      </Route>


    </Routes>
  );
}

export default App;
