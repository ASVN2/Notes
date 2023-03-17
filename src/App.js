import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { user, isReady } = useAuth();

  return (
    <>
      {isReady && (
        <div className="App max-w-[1200px] mx-auto ">
          <Routes>
            <Route path="/" exact element={!user ? <Intro /> : <Navigate to="/home" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/home" />} />
            <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
            <Route path="/*" element={user ? <Home /> : <Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
