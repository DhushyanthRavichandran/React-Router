
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './components/User';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
       <BrowserRouter>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/about'>About</Link></li>
       <li><Link to='/books/old-books'>Old book</Link></li>
       <li><Link to='/books/new-books'>new book</Link></li>
       <li><Link to='/user/1'>user 1</Link></li>
       <li><Link to='/user/2'>user 2</Link></li>
       <li><Link to='login'>Login</Link></li>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/books'>
            <Route path='old-books' element={<OldBooks/>}/>
            <Route path='new-books'  element={<NewBooks/>}/>
         </Route>
         <Route path='/user/:id' element={<User/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='dasboard' element={<Dashboard/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
