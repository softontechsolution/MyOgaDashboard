import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Single from "./pages/single/single";
import SingleDriver from "./pages/single/singleDriver";
import List from "./pages/list/list";
import DriversList from "./pages/list/driversList";
import NewDriver from './pages/new/newDriver';
import New from "./pages/new/new";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from './context/darkModeContext';
//import { AuthContext } from "./context/authContext";
import CompanyList from './pages/list/companyList';
import NewCompany from './pages/new/newCompany';
import SingleCompany from './pages/single/singleCompany';
import BookingList from './pages/list/bookingList';
import NewBooking from './pages/new/newBooking';
import SingleBooking from './pages/single/singleBooking';


function App() {

  const {darkMode} = useContext(DarkModeContext)
  //const {currentUser} = useContext(AuthContext)

  //const RequireAuth = ({children}) => {
  //  return currentUser ? (children) : <Navigate to="/login"/>;
  //}

  return (
    <div className={ darkMode ? "app dark": "app"}>
      <BrowserRouter basename="/MyOgaDashboard">
        <Routes>
          <Route path="/MyOgaDashboard">
            <Route path ="login" element={<Login />} />
            <Route index element={
                //<RequireAuth>
                  <Home />
                //</RequireAuth>
              } 
            />
            <Route path="users">
              <Route index element={
                  //<RequireAuth>
                    <List/>
                  //</RequireAuth>
                }
              />
              <Route path=":userId" element={
                  //<RequireAuth>
                    <Single/>
                  //</RequireAuth>
                }
              />
              <Route path="new" element={
                  //<RequireAuth>
                    <New inputs={userInputs} title="Add New User"/>
                  //</RequireAuth>
                }
              />
            </Route>
            <Route path="drivers">
              <Route index element={
                  //<RequireAuth>
                      <DriversList />
                  //</RequireAuth>
                }
              />
              <Route path=":driverId" element={
                  //<RequireAuth>
                    <SingleDriver/>
                  //</RequireAuth>
                }
              />
              <Route path="new" element={
                  //<RequireAuth>
                    <NewDriver/>
                  //</RequireAuth>
                }
              />
            </Route>
            <Route path="company">
              <Route index element={
                  //<RequireAuth>
                    <CompanyList/>
                  //</RequireAuth>
                }
              />
              <Route path=":companyId" element={
                  //<RequireAuth>
                    <SingleCompany/>
                  //</RequireAuth>
                }
              />
              <Route path="new" element={
                  //<RequireAuth>
                    <NewCompany/>
                  //</RequireAuth>
                }
              />
            </Route>
            <Route path="bookings">
              <Route index element={
                  //<RequireAuth>
                    <BookingList/>
                  //</RequireAuth>
                }
              />
              <Route path=":bookingId" element={
                  //<RequireAuth>
                    <SingleBooking/>
                  //</RequireAuth>
                }
              />
              <Route path="new" element={
                  //<RequireAuth>
                    <NewBooking/>
                  //</RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
