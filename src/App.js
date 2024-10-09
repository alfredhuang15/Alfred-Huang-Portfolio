
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        
      </Route>
    </Routes>
    </>
  );
}

export default App;
