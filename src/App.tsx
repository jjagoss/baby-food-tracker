import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { FoodTrackerPage } from './Pages/FoodTrackerPage';
import { AuthProvider, useAuth } from './context/AuthContext';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <FoodTrackerPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;