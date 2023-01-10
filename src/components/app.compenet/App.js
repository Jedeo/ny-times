import { Route, Routes } from 'react-router-dom';
import ArticleDetails from '../articalDetail.component/ArticleDetails';
import Home from '../home.componet/Home';
import Navbar from '../navbar.component/Navbar';

import './App.css';

const App = ()=> {
 
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/article/:title' element={<ArticleDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
