import Home from "./pages/home/home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Single from "./pages/single/single";
import New from "./pages/new/new";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from "./context/authContext";


function App() {

  const {darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>;
  }

  console.log(currentUser)
  return (
    <div className={ darkMode ? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path ="login" element={<Login />} />
            <Route index element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              } 
            />
            <Route path="users">
              <Route index element={
                  <RequireAuth>
                    <List/>
                  </RequireAuth>
                }
              />
              <Route path=":userId" element={
                  <RequireAuth>
                    <Single/>
                  </RequireAuth>
                }
              />
              <Route path="new" element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User"/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="drivers">
              <Route index element={
                  <RequireAuth>
                      <List/>
                  </RequireAuth>
                }
              />
              <Route path=":driverId" element={
                  <RequireAuth>
                    <Single/>
                  </RequireAuth>
                }
              />
              <Route path="new" element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New Driver"/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="company">
              <Route index element={
                  <RequireAuth>
                    <List/>
                  </RequireAuth>
                }
              />
              <Route path=":companyId" element={
                  <RequireAuth>
                    <Single/>
                  </RequireAuth>
                }
              />
              <Route path="new" element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New Company"/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="bookings">
              <Route index element={
                  <RequireAuth>
                    <List/>
                  </RequireAuth>
                }
              />
              <Route path=":bookingId" element={
                  <RequireAuth>
                    <Single/>
                  </RequireAuth>
                }
              />
              <Route path="new" element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New Booking"/>
                  </RequireAuth>
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
