import './App.css';
import Header from "./pages/header/header";
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
import Dashboard from './pages/dashboard/dashboard';
import Index from './pages/Index';
import EmpListing from './pages/produk/hapus';
import EmpCreate from './pages/produk/create';
import EmpDetail from './pages/produk/detail';
import EmpEdit from './pages/produk/edit';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  // Menggunakan useLocation untuk mendapatkan informasi lokasi saat ini
  const location = useLocation();

  return (
    <>
      {/* Menampilkan Header hanya jika path bukan /login atau /register */}
      {location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/' && <Header />}
      
      <Routes>
        {/* Route untuk halaman login */}
        <Route path='/login' element={<Login />} />
        
        {/* Route untuk halaman register */}
        <Route path='/register' element={<Register />} />
        
        {/* Route untuk halaman utama (dashboard) */}
        <Route path='/' element={<Index />} />
        
        {/* Route untuk halaman dashboard */}
        <Route path='/dashboard' element={<Dashboard />} />


          <Route path='/produk' element={<EmpListing />}></Route>
          <Route path='/produk/create' element={<EmpCreate />}></Route>

          <Route path='/produk/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/produk/edit/:empid' element={<EmpEdit />}></Route>
      </Routes>
    </>
  );
}

export default App;
