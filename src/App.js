import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routes/CustomerRoutes';
import AdminRouters from './Routes/AdminRouters';

function App() {
  return (
    <div className="">

      <Routes>

        <Route path='/*' element={<CustomerRoutes/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>

      </Routes>

    </div>
  );
}

export default App;