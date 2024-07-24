import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Patients from './pages/addPatient/addPatient';
import Footer from './component/footer/footer';
import Home from './pages/home/home';
import Provider from './pages/healthProvider/healthProvider';
import Patientrecord from './pages/patientrecord/patientrecord';
import Healthrecord from './pages/healthrecord/healthrecord';
import Dashboard from './pages/adminDashboard/adminDashboard';
import Addrecord from './pages/addrecord/addrecord';


function App() {
  return (
    <div className="App">

   <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/patient" element={<Patients/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/addusers" element={<Provider/>}/>
        <Route path="/patientrecord" element={<Patientrecord/>}/>
        <Route path="/healthrecord" element={<Healthrecord/>}/>
        <Route path="/admindashboard" element={<Dashboard/>}/>
        <Route path="/addrecord" element={<Addrecord/>}/>
      </Routes>
    </BrowserRouter>

    <Footer/>
      
    </div>
  );
}

export default App;
