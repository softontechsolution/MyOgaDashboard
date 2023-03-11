import Home from "./pages/home/home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Single from "./pages/single/single";
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


function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={ darkMode ? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path ="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="drivers">
              <Route index element={<List/>}/>
              <Route path=":driverId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="company">
              <Route index element={<List/>}/>
              <Route path=":companyId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="bookings">
              <Route index element={<List/>}/>
              <Route path=":bookingId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
