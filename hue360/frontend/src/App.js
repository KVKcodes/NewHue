import Gallery from './components/Gallery';
import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { useLocation } from 'react-router-dom';
import Register from './components/Register';
import ForgotPassword from './components/LandingComponents/ForgotPassword';
import { AuthProvider } from './components/auth';

let previousStylesheet = null;
export async function importStylesheets(location) {
  let newStylesheet = null;
  try {
    if (location.pathname === '/') {
      newStylesheet = await import('./css/styles.css');
    } else if (location.pathname === '/gallery') {
      newStylesheet = await import('./css/shop_styles.css');
    } else if (location.pathname === '/login') {
      newStylesheet = await import('./css/login.css');
    } else if (location.pathname === '/register') {
      newStylesheet = await import('./css/login.css');
    } else if (location.pathname === '/ForgotPassword') {
      newStylesheet = await import('./css/Forgot.css');
    }

    if (previousStylesheet) {
      // Check if the unuse method is available before calling it
      if (typeof previousStylesheet.unuse === 'function') {
        previousStylesheet.unuse();
      }
    }

    if (newStylesheet && newStylesheet.default) {
      // Check if the use method is available before calling it
      if (typeof newStylesheet.default.use === 'function') {
        newStylesheet.default.use();
      }
    }

    previousStylesheet = newStylesheet;
  } catch (error) {
    console.error('Error importing stylesheet:', error);
  }
}

function App() {
  const location = useLocation();
  importStylesheets(location);
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
