import HomePage from "./Components/mainHomeComponent.jsx";
import HeHomepage from './Components/heHomepage.jsx';
import EnHomepage from './Components/enHomepage.jsx';
import LogInOrSignIn from './Components/logInOrSignIn.jsx';

import { Routes, Route } from 'react-router-dom';

import './style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/heHomepage" element={<HeHomepage />} />
      <Route path="/enHomepage" element={<EnHomepage />} />
      <Route path="/logInOrSignIn" element={<LogInOrSignIn />} />

    </Routes>
  );
}

export default App;
