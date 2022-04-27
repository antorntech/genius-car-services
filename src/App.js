import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import SignUp from "./components/SignUp/SignUp";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import CheckOut from "./components/CheckOut/CheckOut";
import AddService from "./components/AddService/AddService";
import ManageServices from "./components/ManageServices/ManageServices";
import Order from "./components/Order/Order";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageservices"
          element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
