import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Apponment from "./pages/Aponment/Apponment";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import Navbar from "./pages/Sheard/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Deashbord from "./pages/Deashboard/Deashbord";
import MyAppionment from "./pages/Deashboard/MyAppionment";
import Myreview from "./pages/Deashboard/Myreview";
import User from "./pages/Deashboard/User";
import RequireAdmin from "./pages/Login/RequireAdmin";
import AddDoctor from "./pages/Deashboard/AddDoctor";
import ManageDoctor from "./pages/Deashboard/ManageDoctor";
import Payment from "./pages/Deashboard/Payment";

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/apponment"
          element={
            <RequireAuth>
              <Apponment></Apponment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="deashbord"
          element={
            <RequireAuth>
              <Deashbord></Deashbord>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppionment></MyAppionment>}></Route>
          <Route path="myreview" element={<Myreview></Myreview>}></Route>

          <Route
            path="user"
            element={
              <RequireAdmin>
                <User></User>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="adddoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="managedoctor"
            element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>

        <Route path="/" element></Route>
        <Route path="/" element></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
