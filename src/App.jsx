import HomePage from "./pages/mainHomeComponent.jsx";
import HeHomepage from './pages/heHomepage.jsx';
import EnHomepage from './pages/enHomepage.jsx';
import LogInOrSignIn from './pages/logInOrSignIn.jsx';
import ErrorPage from './pages/errorpage.jsx';
import ShpebaSec from './pages/shpebaSec.jsx';
import UndefinedComponent from './Components/undefined.jsx';

import { Routes, Route } from 'react-router-dom';

import './style.css';

function App() {
  return (
    <Routes>
      <Route path="/undefined" element={<UndefinedComponent />} />
      <Route path="/shpebaSec" element={<ShpebaSec />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/heHomepage" element={<HeHomepage />} />
      <Route path="/enHomepage" element={<EnHomepage />} />
      <Route path="/logInOrSignIn" element={<LogInOrSignIn />} />

    </Routes>
  );
}

export default App;
