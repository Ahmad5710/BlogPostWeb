import Home from './components/home';
import './App.css';
import AdminLogin from './components/admin/adminlogin';
import AdminDashBoard from './components/admin/admin';
import Authors from './components/admin/AuthorDetail/Authors';
import Viewers from './components/admin/viewer/viewer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCategory from './components/admin/createcategory';
import AuthorLogin from './components/Author/authorlogin';
import AuthorSignup from './components/Author/authorsignup';
import ViewerLogin from './components/viewer/viewerlogin';
import ViewerSignup from './components/viewer/viewersignup';
import Author from './components/Author/author';
import Viewer from './components/viewer/viewer';
import CreateBlog from './components/Author/CreateBlog';
import Test from './components/test/test';
import EditProfile from './components/Author/editProfile';
import Posts from './posts/AuthorPost';
import Categories from './components/admin/categories';
import CategoryDetail from './components/admin/categoryDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={ <Home/>}/>
        <Route path='/AdminLogin' element={ <AdminLogin/>}/>
        <Route path='/AdminDashboard' element={ <AdminDashBoard/>}/>
        <Route path='/Authors' element={ <Authors/>}/>
        <Route path='/Viewers' element={ <Viewers/> }/>
        <Route path='/CreateCategory' element={ <CreateCategory/>}/>
        <Route path='/AuthorLogin' element={ <AuthorLogin/>}/>
        <Route path='/AuthorSignup' element={ <AuthorSignup/>}/>
        <Route path='/ViewerLogin' element={ <ViewerLogin/>}/>
        <Route path='/ViewerSignup' element={  <ViewerSignup/>}/>
        <Route path='/Author' element={  <Author/>}/>
        <Route path='/Viewer' element={  <Viewer/>}/>
        <Route path='/CreateBlog' element={  <CreateBlog/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
        <Route path='/Posts' element={<Posts/>}/>
        <Route path='/Categories' element={  <Categories/>}/>
        <Route path='/CategoryDetail/:name' element={  <CategoryDetail/>}/>

       

      </Routes>
      </BrowserRouter>

     

    
      
      
      
      




 

     

    </div>
  );
}

export default App;
