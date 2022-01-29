import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";
import DetailPage from "./pages/DetailPage";
import HospitalPage from "./pages/hospital/HospitalPage";
import CategoryPage from "./pages/CategoryPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import UploadPage from "./pages/UploadPage";
import { ToastProvider } from 'react-toast-notifications';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ToastProvider placement="top-center">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/'><HomePage/></Route>
          <Route path='/about'><AboutPage/></Route>
          <Route path='/product'><ProductPage/></Route>
          <Route path='/contact'><ContactUs/></Route>
          <Route path='/detail/:id/title/:title'>
            <DetailPage/>
          </Route>
          <Route path='/hospital'><HospitalPage/></Route>
          <Route path='/upload'><UploadPage/></Route>
          <Route path='/category' 
                render={ ({match: {url}}) => (
                  <>
                    <Route path={`${url}/`} exact><CategoryPage/></Route>
                
                    <Route path={`${url}/create`}><CreatePage/></Route>

                    <Route path={`${url}/edit/:id`}><EditPage/></Route>
                  </>
                ) }>
                
                </Route>
          <Route path='/register'><RegisterPage/></Route>
          <Route path='/login'><LoginPage/></Route>
        </Switch>
        <Footer/>
      </Router>
    </ToastProvider>
  );
}

export default App;
