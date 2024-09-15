import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute user={user}>
                  <Profile user={user} setUser={setUser} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/test"
              element={
                <ProtectedRoute user={user}>
                  <TestPage user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/results"
              element={
                <ProtectedRoute user={user}>
                  <TestResultPage user={user} />
                </ProtectedRoute>
              }
            />
          </>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
