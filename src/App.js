import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../src/components/pages/Home'
import Blog from '../src/components/pages/Blog'
import Business from '../src/components/pages/Business'
import Contact from '../src/components/pages/Contact'
import Nerds from '../src/components/pages/Nerds'
import Pricing from '../src/components/pages/Pricing'
import SignIn from '../src/components/pages/SignIn'
import SignUp from '../src/components/pages/SignUp'
import Services from '../src/components/pages/Services'
import Continue from '../src/components/pages/Continue'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/Business' element={<Business/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Nerds' element={<Nerds/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Continue' element={<Continue/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
