// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import AddEmployees from './components/employeesAdd';
import ViewEmployee from './components/employeesView';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addemployees" element={<AddEmployees />} /> 
          <Route path="viewemployees" element={<ViewEmployee />} />
        </Route>
      </Routes>
  );
}

export default App;
