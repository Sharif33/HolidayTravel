
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './login/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
// import Resort from './pages/Resorts/Resort';
import SingleResort from './pages/Resorts/SingleResort';
import Login from './login/Login';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Resorts from './pages/Resorts/Resorts';
import MyOrders from './pages/MyOrders/MyOrders';
import AddResort from './pages/AddResort/AddResort';
import ManageOrder from './pages/ManageOrder/ManageOrder';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/resorts">
              <Resorts></Resorts>
            </Route>
            <PrivateRoute exact path="/resort/:id">
              <SingleResort></SingleResort>
            </PrivateRoute>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/addResort">
              <AddResort></AddResort>
            </Route>
            <Route exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
