import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Layout from'./Layout';
import Home from'./Home';
import Blogs from'./Blogs';
import Contact from'./Contact';
import NoPage from'./NoPage';
import MyForm from'./MyForm';
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Route>
      </Routes>
      </BrowserRouter>

  );
}
export default App; 