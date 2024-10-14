import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
   <>
   

    <Router>

      
    {/* <Login/> */}

            <Routes>



               <Route path='/' element = {<Login/>}/>

                <Route path='/Dashboard' element = {<Dashboard/>}/> 


            </Routes>
 

    </Router>
    
   
   </>
  );
}

export default App;
